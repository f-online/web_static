/* eslint-disable no-param-reassign */
const path = require('path');

/* get all questions recursively as they are stored
 * in a tree structure of topics and subtopics
 */
const getQuestions = (topic, path) => {
  const questions = [];
  if (topic.subTopics && topic.subTopics.length > 0) {
    topic.subTopics.forEach((subTopic) => {
      questions.push(...getQuestions(subTopic, [...path, subTopic.txt_text]));
    });
    return questions;
  }
  if (topic.questions && topic.questions.length > 0) {
    return [{
      path,
      questions: topic.questions,
    }];
  }
  return [];
};

async function generateQuestions(actions) {
  console.info('[GenerateQuestions] Start generating');

  const template = path.resolve('./src/templates/question.js');

  console.info('[GenerateQuestions] Fetching questions');

  // TODO: this should be moved to gatsby-config.js but I couldn't make it work
  const fonlineApiUrl = 'https://app.f-online.at/json/export';
  const fonlineApiKey = process.env.FONLINE_API_KEY;
  const SEOQuestionLimit = 5000;

  if (!fonlineApiKey) {
    console.error('[GenerateQuestions] No API key provided');
    return;
  }

  if (!fonlineApiUrl) {
    console.error('[GenerateQuestions] No API URL provided');
    return;
  }

  const url = `${fonlineApiUrl}/${fonlineApiKey}`;
  console.info(`[GenerateQuestions] Fetching questions from ${url}`);
  try {
    const questions = [];
    const data = await fetch(url);
    if (!data.ok) {
      console.error('[GenerateQuestions] Failed to fetch questions');
    } else {
      const topics = await data.json();
      topics.forEach((topic) => {
        const questionSets = getQuestions(topic, [topic.txt_text]);
        // flatten structure to one array of questions
        // each question contains the path to the question as well
        questionSets.forEach((questionSet) => {
          questions.push(...questionSet.questions.map((question) => (
            { ...question, path: questionSet.path }
          )));
        });
      });
    }

    // Create a page for each question
    console.info(`[GenerateQuestions] Found ${questions.length} questions`);

    // TODO: remove the slice after SEO optimation is done
    // limit to 100 questions for now
    questions.slice(0, SEOQuestionLimit).forEach((question) => {
      actions.createPage({
        path: `/at/fragenkatalog/frage/${question.qst_id}`,
        component: template,
        context: {
          question,
        },
      });
    });

    // generate page for all questions
    actions.createPage({
      path: '/at/fragenkatalog/alle-fragen/',
      component: path.resolve('./src/templates/allQuestions.js'),
      context: {
        questions: questions.slice(0, SEOQuestionLimit),
      },
    });
  } catch (error) {
    console.error('[GenerateQuestions] Failed to fetch questions', error);
  }

  console.info('[GenerateQuestions] Finished generating');
}

async function generateStaticPages(staticPages, actions) {
  console.info('[GenerateStaticPages] Start generating');

  const template = path.resolve('./src/templates/staticPage.js');
  staticPages.nodes.forEach((staticPage) => {
    if (staticPage.country.render === true) {
      const nodePath = `${staticPage.country.countryCode}/${staticPage.slug.current}/`;

      actions.createPage({
        path: nodePath,
        component: template,
        context: {
          documentId: staticPage._id,
          seo: {
            title: staticPage.seo.title,
            description: staticPage.seo.description,
          },
        },
      });
      console.info(
        `[GenerateStaticPages] Created page for ${staticPage.title} (path: /${nodePath})`,
      );
    } else {
      console.info(`[GenerateStaticPages] Skipped page "${staticPage.title}" due to render flag.`);
    }
  });
  console.info('[GenerateStaticPages] Finished generating');
}

async function generateCountryIndexPages(countries, actions) {
  console.info('[GenerateCountryIndexPages] Start generating');

  const template = path.resolve('./src/templates/countryIndexPage.js');
  countries.nodes.forEach((node) => {
    if (node.render) {
      const nodePath = `${node.countryCode}/`;

      actions.createPage({
        path: nodePath,
        component: template,
        context: {
          documentId: node._id,
          seo: {
            title: node.seo.title,
            description: node.seo.description,
          },
        },
      });
      console.info(
        `[GenerateCountryIndexPages] Created page for ${node.name} (path: /${nodePath})`,
      );
    } else {
      console.info(`[GenerateCountryIndexPages] Skipped country "${node.name}" due to render flag.`);
    }
  });
  console.info('[GenerateCountryIndexPages] Finished generating');

  if (countries.nodes.filter((country) => country.render).length === 1) {
    const activeCountry = countries.nodes.filter((country) => country.render)[0];
    actions.createRedirect({
      fromPath: '/',
      toPath: `/${activeCountry.countryCode}/`,
      isPermanent: true,
    });

    console.info(`[GenerateCountryIndexPages] Created redirect from / to /${activeCountry.countryCode}/ as only one country is active`);
  }
}

async function generateDrivingSchoolPages(drivingSchools, drivingSchoolsRegions, actions) {
  console.info('[GenerateDrivingSchoolPages] Start generating');

  // generate per country code
  drivingSchools.countryCode.forEach((drivingSchoolCountryCode) => {
    const nodePath = `${drivingSchoolCountryCode}/fahrschulen/`;

    actions.createPage({
      path: nodePath,
      component: path.resolve('./src/templates/drivingSchools/perCountry.js'),
      context: {
        countryCode: drivingSchoolCountryCode,
      },
    });
    console.info(
      `[GenerateDrivingSchoolPages] Created page for Fahrschulen (${drivingSchoolCountryCode}) (path: /${nodePath})`,
    );
  });

  // generate per region
  drivingSchoolsRegions.nodes.forEach((drivingSchoolRegion) => {
    // eslint-disable-next-line no-use-before-define
    const urlEncodedName = encodeURI(replaceUmlauts(drivingSchoolRegion.name.toLowerCase()));
    const nodePath = `${drivingSchoolRegion.country.countryCode}/fahrschulen/${urlEncodedName}`;

    actions.createPage({
      path: nodePath,
      component: path.resolve('./src/templates/drivingSchools/perRegion.js'),
      context: {
        regionId: drivingSchoolRegion._id,
        regionName: drivingSchoolRegion.name,
        countryCode: drivingSchoolRegion.country.countryCode,
      },
    });

    console.info(
      `[GenerateDrivingSchoolPages] Created page for Fahrschulen in ${drivingSchoolRegion.name} (${drivingSchoolRegion.country.countryCode}) (path: /${nodePath})`,
    );
  });

  console.info('[GenerateDrivingSchoolPages] Finished generating');
}

exports.createPages = async ({ graphql, actions }) => {
  console.info('[SiteGeneration] Fetching data');

  const {
    data: {
      staticPages, countries, drivingSchools, drivingSchoolsRegions,
    },
  } = await graphql(`
    query {
      staticPages: allSanityStaticPage {
        nodes {
          _id
          title
          slug {
            current
          }
          country {
            countryCode
            render
          }
          seo {
            title
            description
          }
        }
      }
      countries: allSanityCountry {
        nodes {
          _id
          name
          countryCode
          seo {
            title
            description
          }
          render
        }
      }
      drivingSchools: allSanityDrivingSchool {
        nodes {
          _id
          name
          region {
            name
          }
          country {
            countryCode
          }
        }
        countryCode: distinct(field: {region: {country: {countryCode: SELECT}}})
      }
      drivingSchoolsRegions: allSanityRegion {
        nodes {
          _id
          name
          country {
            countryCode
          }
        }
      }
    }
  `);

  // start generating pages
  console.info('[SiteGeneration] Start generating pages');

  await Promise.all([
    generateStaticPages(staticPages, actions),
    generateCountryIndexPages(countries, actions),
    generateDrivingSchoolPages(drivingSchools, drivingSchoolsRegions, actions),
    generateQuestions(actions),
  ]);

  console.info('[SiteGeneration] Finished generating pages');
};

// helper
function replaceUmlauts(value) {
  value = value.toLowerCase();
  value = value.replace(/ä/g, 'ae');
  value = value.replace(/ö/g, 'oe');
  value = value.replace(/ü/g, 'ue');
  value = value.replace(/ß/g, 'ss');
  value = value.replace(/ /g, '-');
  value = value.replace(/\./g, '');
  value = value.replace(/,/g, '');
  value = value.replace(/\(/g, '');
  value = value.replace(/\)/g, '');
  return value;
}
