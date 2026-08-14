import { Bot, ExternalLink } from "lucide-react";

const PropertyAISection = () => {
  return (
    <div className="space-y-4 text-[#dae2fd]">
      {/* AI Agent Card */}
      <div
        className="
         bg-[#171f33]
        rounded-xl
        p-4
        border
        border-[#464554]
        shadow-sm
      "
      >
        <h3
          className="
          text-sm
          font-semibold
         
          mb-1
        "
        >
          AI Agent
        </h3>

        <p
          className="
          text-xs
          text-gray-500
          mb-3
        "
        >
          The dedicated AI agent that answers calls about this property
        </p>

        {/* Agent */}
        <div
          className="
          flex
          items-center
          justify-between
          bg-[#fff1f3]
          rounded-lg
          px-3
          py-2.5
        "
        >
          <div className="flex items-center gap-3">
            <div
              className="
              h-8
              w-8
              rounded-full
              bg-[#f7cbd2]
              flex
              items-center
              justify-center
            "
            >
              <Bot
                className="
                size-4
                text-[#d84a5c]
              "
              />
            </div>

            <div>
              <p
                className="
                text-xs
                font-semibold
                text-[#171f33]
              "
              >
                Alexis - Residential Specialist
              </p>

              <div
                className="
                flex
                items-center
                gap-1
                text-[11px]
                text-gray-500
              "
              >
                <span
                  className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-green-500
                "
                />
                Live · Handling calls
              </div>
            </div>
          </div>

          <ExternalLink
            className="
            size-4
            text-gray-400
          "
          />
        </div>
      </div>

      {/* Virtual Tour */}
      <div
        className="
         bg-[#171f33]
        rounded-xl
        p-4
        border
        border-[#464554]
        shadow-sm
      "
      >
        <h3
          className="
          text-sm
          font-semibold
          
          mb-3
        "
        >
          Virtual Tour
        </h3>

        <button
          className="
          w-full
          h-9
          rounded-lg
        
          bg-[#ffb783]
          text-[#4f2500] 
         
         px-1
          text-xs
          font-medium
          flex
          items-center
          justify-center
          gap-2
        "
        >
          <span
            className="
            h-4
            w-4
            rounded-full
            border
            border-white/50
            flex
            items-center
            justify-center
            text-[8px]
          "
          >
            ▶
          </span>
          Open Virtual Tour
          <ExternalLink
            className="
            size-3
            ml-auto
            mr-2
          "
          />
        </button>
      </div>
    </div>
  );
};

export default PropertyAISection;
