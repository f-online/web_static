// Official exam questions, fetched at build time from the F-Online app export.
// Used for /at/fragenkatalog/alle-fragen/ and /at/fragenkatalog/frage/<id>/.

export interface Answer {
  txt_text: string;
  ans_correct: number;
}

export interface Question {
  qst_id: number;
  txt_text: string;
  qst_image: number | null;
  video_url: string | null;
  answers: Answer[];
  // topic names from the root topic down to the question
  path: string[];
}

interface Topic {
  txt_text: string;
  subTopics?: Topic[];
  questions?: Omit<Question, 'path'>[];
}

const API_URL = import.meta.env.FONLINE_API_URL ?? process.env.FONLINE_API_URL ?? 'https://app.f-online.at/json/export';
const API_KEY = import.meta.env.FONLINE_API_KEY ?? process.env.FONLINE_API_KEY;
const QUESTION_LIMIT = 5000;

// topics are a tree; questions only live in the leaves
function collect(topic: Topic, path: string[]): Question[] {
  if (topic.subTopics?.length) {
    return topic.subTopics.flatMap((subTopic) => collect(subTopic, [...path, subTopic.txt_text]));
  }
  return (topic.questions ?? []).map((question) => ({ ...question, path }));
}

async function fetchQuestions(): Promise<Question[]> {
  if (!API_KEY) {
    console.warn('[questions] FONLINE_API_KEY is not set, skipping question pages');
    return [];
  }

  const response = await fetch(`${API_URL}/${API_KEY}`);
  if (!response.ok) {
    throw new Error(`[questions] Failed to fetch questions: ${response.status} ${response.statusText}`);
  }

  const topics: Topic[] = await response.json();
  const questions = topics.flatMap((topic) => collect(topic, [topic.txt_text]));
  console.info(`[questions] Found ${questions.length} questions`);

  return questions.slice(0, QUESTION_LIMIT);
}

let cache: Promise<Question[]> | undefined;

export function getQuestions(): Promise<Question[]> {
  cache ??= fetchQuestions();
  return cache;
}
