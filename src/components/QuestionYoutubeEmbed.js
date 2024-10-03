import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { FaLightbulb, FaUserGraduate } from 'react-icons/fa';
import ButtonLink from './ButtonLink';

export default function QuestionYoutubeEmbed({ url, title }) {
  // strip youtube url to get video id and check for short or long url (Thanks CoPilot :))
  const videoId = url.split('v=')[1] || url.split('youtu.be/')[1].split('?')[0];

  return (
    <div>
      <hr className="mt-4 mb-6 mx-auto" />
      <div className="flex items-center flex-col sm:flex-row">
        <div>
          {/* Title */}
          <h4 className="text-xl font-semibold">Du benötigst eine einfache Erklärung?</h4>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-fonline-500 rounded-full">
              <FaLightbulb className="w-4 h-4 mr-2 text-white" />
              {' '}
              Erklärungsvideo
            </span>
            <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-fonline-500 rounded-full">
              <FaUserGraduate className="w-4 h-4 mr-2 text-white" />
              {' '}
              Bernhard Hummel
            </span>
          </div>

          {/* Intro Text */}
          <p className="pb-2 sm:max-w-prose">
            Der Fahr(schul)lehrerInnenausbildner, Fahrprüfer, und Buchautor Bernhard Hummel hat zu dieser Frage ein Video mit einer ausführlichen Erklärung erstellt.
          </p>
          <p className="sm:mb-4 mt-0 pt-0">
            In seinen anderen Videos befasst er sich mit den häufigsten und schwersten Fragen rund um die österreichische Führerscheinprüfung. Schaut gerne vorbei!
          </p>

          {/* Button */}
          <ButtonLink className="hidden sm:block" to={url} target="_blank" rel="noreferrer">Jetzt ansehen</ButtonLink>
        </div>
        {/* Video */}
        <a href={url} className="block" target="_blank" rel="noreferrer">
          <div className="w-full aspect-video rounded-l-xl rounded-t-xl overflow-hidden sm:ml-4 mb-5 relative">
            <img
              src={`/thumbnails/${videoId}.jpg`}
              alt={`Video zu Frage: ${title}`}
              className="object-cover w-full h-full"
            />
            {/* Place span in the middle of the image within the container */}
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IoPlay className="w-20 h-20 sm:w-16 sm:h-16 text-fonline-500" />
            </span>
          </div>
        </a>
        {/* Button */}
        <ButtonLink className="block sm:hidden" to={url} target="_blank" rel="noreferrer">Jetzt ansehen</ButtonLink>

      </div>
    </div>
  );
}
