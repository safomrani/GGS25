import React from "react";
import { AgendaCard, AgendaCardContent } from "../ui/agendaCard";
import { AgendaSeparator } from "../ui/agendaSeparator";
import { RobotoCondensed, inter, interMedium, interBold, interBlack } from "./fonts";

// Define track types with their colors
const tracks = [
  { name: "Green Investments Management", color: "#0a7364" },
  { name: "Leveraging Blended Finance", color: "#00a98f" },
  { name: "Green Value Chains & Future-Proof Employment", color: "#d51317" },
  { name: "Sector Spotlights: AgriTech, Health Care & AI", color: "#231f20" },
];

// Helper function to render host names with mixed font weights
const renderHostName = (hostName: string) => {
  // Define connector phrases that should be normal weight
  const connectors = [
    'in partnership with',
    'in collaboration with',
    'and',
    'with',
    '&',
    'in association with',
    'together with'
  ];

  // Create a regex pattern that matches connectors with word boundaries
  const connectorPattern = new RegExp(`(\\s*\\b(?:${connectors.join('|')})\\b\\s*)`, 'gi');
  
  // Split the text while keeping the separators and their surrounding spaces
  const parts = hostName.split(connectorPattern).filter(part => part.trim() !== '');
  
  return (
    <>
      {parts.map((part, index) => {
        const trimmedPart = part.trim();
        if (!trimmedPart) return null;
        
        // Check if this part is a connector phrase (ignoring spaces)
        const isConnector = connectors.some(connector => 
          trimmedPart.toLowerCase() === connector.toLowerCase()
        );
        
        if (isConnector) {
          // Render connector with normal weight, preserving original spacing
          return (
            <span key={index} className="font-normal">
              {part}
            </span>
          );
        } else {
          // Render organization name with bold weight, preserving original spacing
          return (
            <span key={index} className="font-bold">
              {part}
            </span>
          );
        }
      })}
    </>
  );
};

// Morning sessions data (left column)
const morningEvents = [
  {
    time: "9:00",
    title: "Registration",
    type: "break",
    bgColor: "#0ca590",
    textColor: "#ffffff",
  },
  {
    time: "10:00",
    title: "Green Growth Summit 2025: Unlocking Solutions and Innovative Finance",
    room: "Plenary Ballroom",
    type: "session",
  },
  {
    time: "10:15",
    title: "Opening Remarks and Keynote Speeches",
    room: "Plenary Ballroom",
    type: "session",
  },
  {
    time: "10:45",
    title: "From Spark to Scale: Unlocking Egypt's Green Transition",
    room: "Plenary Ballroom",
    host: "Hivos",
    type: "session",
  },
  {
    time: "11:30",
    title: "Coffee Break & Networking",
    type: "break",
    bgColor: "#0ca590",
    textColor: "#ffffff",
  },
  {
    time: "12:00",
    title: "Expert Deep Dives",
    type: "section-header",
    sessions: [
      {
        title: "Seizing the Green Opportunity: Strengthening Business Support Organizations (BSOs) in a New Funding Landscape",
        room: "Plenary Ballroom",
        cohostedBy: ["Hivos", "SPARK"],
        dots: [
          { color: "#D51317" }
                ],
      },
      {
        title: "Healthcare Resilience in a Changing Climate: Pioneering SAHA, the First Green Climate Fund Regional Program",
        room: "Isis",
        hostedBy: "Pathfinder International",
        dots: [
          { color: "#231F20" }
        ],
      },
      {
        title: "Funding New Markets & Scaling Impact: End-User Finance for Solar Products & Services in Egypt",
        room: "Partition C",
        hostedBy: "Chemonics Egypt",
        dots: [
          { color: "#0A7364" }
        ],
      },
      {
        title: "Green, Defined: Shaping the Future of Climate Investment",
        room: "Aida",
        hostedBy: "Hivos",
        dots: [
          { color: "#00A98F" },
          { color: "#0A7364" }
        ],
      },
    ]
  },
];

// Afternoon sessions data (right column)
const afternoonEvents = [
  {
    time: "13:30",
    title: "Lunch",
    type: "break",
    bgColor: "#0CA590",
    textColor: "#ffffff",
  },
  {
    time: "14:30",
    title: "Afternoon Sessions",
    type: "afternoon-sessions",
    sessions: [
      {
        title: "Advancing 'Investment Ready' Low Carbon Projects*",
        room: "Nefertiti",
        hostedBy: "The British Embassy in Cairo",
        dots: [
          { color: "#00A98F" },
          { color: "#0A7364" },
        ],
      },
      {
        title: "Catalyzing Climate Investments: Unlocking Green Finance for SMEs in Egypt*",
        room: "Partition C",
        hostedBy: "UNIDO in partnership with the Ministry of Environment and Chemonics Egypt",
        dots: [
          { color: "#0A7364" }
         
        ],
      },
      {
        title: "Exploring the True Price of Beef (and More): Pathways for Scaling True Cost Accounting in Egypt*",
        room: "Cleopatra",
        hostedBy: "RDNA & True Price",
        dots: [
          { color: "#D51317" },
          { color: "#000000" }
        ],
      },
    ]
  },
  {
    time: "15:00",
    title: "From Risk to Resilience: De-risking and Corporate Collaboration for Green Impact*",
    room: "Plenary Ballroom",
    hostedBy: "AUC Venture Lab & Nahdet El Mahrousa",
    dots: [
      { color: "#00A98F" },
      { color: "#0A7364" },
      { color: "#D51317" }
    ],
    type: "session",
  },
  {
    time: "18:00",
    title: "End of Programme",
    type: "break",
    bgColor: "#0ca590",
    textColor: "#ffffff",
  },
];

export const Agenda25V2 = (): JSX.Element => {
  const renderDots = (dots: { color: string }[] = []) => {
    if (dots.length === 1) {
      return (
        <div
          className="w-[12px] h-[12px] rounded-[6px] mb-2"
          style={{ backgroundColor: dots[0].color }}
        />
      );
    }
    
    return (
      <div className="flex flex-col gap-1 mb-2">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="w-[12px] h-[12px] rounded-[6px]"
            style={{ backgroundColor: dot.color }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <section className={`w-full mx-auto font-sans px-2 md:px-4 lg:px-6 xl:px-6 2xl:px-16 relative ${inter.className}`} data-model-id="113:102">
        
        {/* Mobile Compact View - Single Column */}
        <div className="lg:hidden space-y-1.5">
          {/* Morning Events */}
          {morningEvents.map((event, index) => (
            <div key={index} className="block">
              {/* Time */}
              <div className="mb-1">
                <p className={`font-bold text-[#255345] text-sm ${interBold.className}`}>
                  {event.time}
                </p>
                <div className="w-6 h-[1px] bg-[#D51317] mb-2"></div>
              </div>

              {event.type === "break" ? (
                <AgendaCard
                  className="w-full rounded-lg shadow-sm mb-2"
                  style={{ backgroundColor: event.bgColor }}
                >
                  <AgendaCardContent className="py-2 px-3">
                    <p
                      className={`font-medium text-xs text-center ${interMedium.className}`}
                      style={{ color: event.textColor }}
                    >
                      {event.title}
                    </p>
                  </AgendaCardContent>
                </AgendaCard>
              ) : event.type === "section-header" ? (
                <AgendaCard className="w-full bg-[#dbf2ee] rounded-lg shadow-sm relative overflow-hidden mb-2">
                  <AgendaCardContent className="py-2.5 px-3 relative z-10">
                    <h2 className={`font-bold text-[#0ca590] text-sm mb-2 text-center ${interBold.className}`}>
                      {event.title}
                    </h2>

                    <div className="space-y-1.5">
                      {event.sessions?.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="relative">
                          {sessionIndex > 0 && (
                            <div className="mb-1.5">
                              <AgendaSeparator className="bg-[#0ca590] opacity-100" />
                            </div>
                          )}

                          <div className="flex items-start relative">
                            <div className="mr-1.5 mt-0.5 relative z-10 flex-shrink-0">
                              {renderDots(session.dots)}
                            </div>

                            <div className="flex-1 relative z-10">
                              <h3 className={`font-black text-[#255345] text-xs leading-tight mb-1 ${interBlack.className}`}>
                                {session.title}
                              </h3>

                              <div className="space-y-0.5">
                                <p className={`text-[10px] text-[#0ca590] ${inter.className}`}>
                                  <span className="font-medium">Room:</span>
                                  <span className="font-bold ml-1">{session.room}</span>
                                </p>

                                {session.cohostedBy ? (
                                  <p className={`text-[10px] text-[#f0783c] ${inter.className}`}>
                                    <span className="font-medium">Hosted By:</span>
                                    <span className="ml-1">
                                      <span className="font-bold">{session.cohostedBy[0]}</span><span className="font-normal"> and </span><span className="font-bold">{session.cohostedBy[1]}</span>
                                    </span>
                                  </p>
                                ) : (
                                  <p className={`text-[10px] text-[#f0783c] ${inter.className}`}>
                                    <span className="font-medium">Hosted By:</span>
                                    <span className="ml-1">{renderHostName(session.hostedBy)}</span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AgendaCardContent>
                </AgendaCard>
              ) : (
                <AgendaCard className="w-full bg-[#dbf2ee] rounded-lg shadow-sm relative mb-2">
                  <AgendaCardContent className="py-2.5 px-3">
                    <div className="flex items-start relative">
                      <div className="flex-1 relative z-10">
                        <h3 className={`font-black text-[#255345] text-xs leading-tight mb-1 ${interBlack.className}`}>
                          {event.title}
                        </h3>
                        <div className="space-y-0.5">
                          {event.room && (
                            <p className={`text-[10px] text-[#0ca590] ${inter.className}`}>
                              <span className="font-medium">Room:</span>
                              <span className="font-bold ml-1">{event.room}</span>
                            </p>
                          )}
                          {event.host && (
                            <p className={`text-[10px] text-[#f0783c] ${inter.className}`}>
                              <span className="font-medium">Hosted By:</span>
                              <span className="ml-1">{renderHostName(event.host)}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AgendaCardContent>
                </AgendaCard>
              )}
            </div>
          ))}

          {/* Afternoon Events */}
          {afternoonEvents.map((event, index) => (
            <div key={index} className="block">
              {/* Time */}
              <div className="mb-1">
                <p className={`font-bold text-[#255345] text-sm ${interBold.className}`}>
                  {event.time}
                </p>
                <div className="w-6 h-[1px] bg-[#D51317] mb-2"></div>
              </div>

              {event.type === "break" ? (
                <AgendaCard
                  className="w-full rounded-lg shadow-sm mb-2"
                  style={{ backgroundColor: event.bgColor }}
                >
                  <AgendaCardContent className="py-2 px-3">
                    <p
                      className={`font-medium text-xs text-center ${interMedium.className}`}
                      style={{ color: event.textColor }}
                    >
                      {event.title}
                    </p>
                  </AgendaCardContent>
                </AgendaCard>
              ) : event.type === "afternoon-sessions" ? (
                <AgendaCard className="w-full lg:flex-1 bg-[#dbf2ee] rounded-[10px] md:rounded-[12px] shadow-lg lg:shadow-lg relative overflow-hidden">
                  <AgendaCardContent className="pt-4 md:pt-5 lg:pt-3 xl:pt-4 2xl:pt-5 pb-4 md:pb-5 lg:pb-3 xl:pb-4 2xl:pb-5 pr-4 md:pr-5 lg:pr-3 xl:pr-4 2xl:pr-5 pl-4 md:pl-8 lg:pl-6 xl:pl-8 2xl:pl-10 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end gap-1 lg:gap-3 mb-3 md:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">
                      <h2 className={`font-bold text-[#0ca590] text-[18px] md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-center lg:text-left pl-0 lg:pl-2 xl:pl-3 2xl:pl-4 ${interBold.className}`}>
                        {event.title}
                      </h2>
                      <span className={`
                        text-[#f0783c] 
                        text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 
                        font-medium 
                        ${inter.className} 
                        bg-white/80 
                        backdrop-blur-sm 
                        px-3 py-1 
                        rounded-full 
                        border border-[#f0783c]/20
                        shadow-sm
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:shadow-md
                        flex items-center gap-1
                      `}>
                        <span className="text-[#f0783c] font-bold">*</span>
                        Invitation-Only Sessions
                      </span>
                    </div>

                    <div className="space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                      {event.sessions?.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="relative">
                          {sessionIndex > 0 && (
                            <div className="mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-4">
                              <AgendaSeparator className="bg-[#0ca590] opacity-100" />
                            </div>
                          )}

                          <div className="flex items-start relative">
                            <div className="mr-2.5 md:mr-2.5 lg:mr-2 xl:mr-2 2xl:mr-3 mt-1 relative z-10 flex-shrink-0 ml-0 lg:ml-2 xl:ml-2 2xl:ml-4">
                              {renderDots(session.dots)}
                            </div>

                            <div className="flex-1 relative z-10">
                              <h3 className={`font-black text-[#255345] text-[17px] md:text-[16.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-tight mb-1.5 md:mb-1.5 lg:mb-0 xl:mb-0 2xl:mb-3 ${interBlack.className}`}>
                                {session.title}
                              </h3>

                              <div className="space-y-1 md:space-y-1 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-2 xl:gap-2 2xl:gap-4 mt-1 lg:mt-1 xl:mt-1 2xl:mt-2">
                                <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#0ca590] ${inter.className}`}>
                                  <span className="font-medium inline-block w-12 md:w-12 lg:inline">Room:</span>
                                  <span className="font-bold lg:ml-1"> {session.room}</span>
                                </p>

                                <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#F0783C] ${inter.className}`}>
                                  <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                  <span className="lg:ml-1">{renderHostName(session.hostedBy)}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AgendaCardContent>
                </AgendaCard>
              ) : event.type === "session" ? (
                <AgendaCard className="w-full bg-[#dbf2ee] rounded-lg shadow-sm relative mb-2">
                  <AgendaCardContent className="py-2.5 px-3">
                    <div className="flex items-start relative">
                      {event.dots && (
                        <div className="mr-1.5 mt-0.5 relative z-10 flex-shrink-0">
                          {renderDots(event.dots)}
                        </div>
                      )}

                      <div className="flex-1 relative z-10">
                        <h3 className={`font-black text-[#255345] text-xs leading-tight mb-1 ${interBlack.className}`}>
                          {event.title}
                        </h3>
                        <div className="space-y-0.5">
                          {event.room && (
                            <p className={`text-[10px] text-[#0ca590] ${inter.className}`}>
                              <span className="font-medium">Room:</span>
                              <span className="font-bold ml-1">{event.room}</span>
                            </p>
                          )}
                          {event.hostedBy && (
                            <p className={`text-[10px] text-[#f0783c] ${inter.className}`}>
                              <span className="font-medium">Hosted By:</span>
                              <span className="ml-1">{renderHostName(event.hostedBy)}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </AgendaCardContent>
                </AgendaCard>
              ) : null}
            </div>
          ))}

          {/* Tracks Card for Mobile */}
          <div className="block mt-3">
            <AgendaCard className="w-full bg-white rounded-lg shadow-sm">
              <AgendaCardContent className="py-2.5 px-3">
                <h2 className={`font-bold text-[#0ca590] text-sm mb-2 text-center ${interBold.className}`}>
                  Tracks
                </h2>

                <div className="space-y-1.5">
                  {tracks.map((track, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <div
                        className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                        style={{ backgroundColor: track.color }}
                      />
                      <p className={`font-bold text-[#255345] text-[10px] leading-tight ${interBold.className}`}>
                        {track.name}
                      </p>
                    </div>
                  ))}
                </div>
              </AgendaCardContent>
            </AgendaCard>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 lg:gap-8 xl:gap-8 2xl:gap-16">
          {/* Left Column - Morning Sessions */}
          <div className="space-y-2.5 md:space-y-3.5 lg:space-y-4 xl:space-y-4 2xl:space-y-4">
            {morningEvents.map((event, index) => (
              <div key={index} className="block lg:flex lg:items-start lg:gap-4 xl:gap-4 2xl:gap-6">
                {/* Desktop: Time beside content */}
                <div className="lg:w-16 xl:w-16 2xl:w-20 lg:text-left lg:flex-shrink-0 lg:pt-1">
                  <p className={`font-bold text-[#255345] text-[19px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] ${interBold.className}`}>
                    {event.time}
                  </p>
                  {/* Desktop line under time */}
                  <div className="flex justify-start ml-4.5 lg:ml-5 xl:ml-5 2xl:ml-6">
                    <div className="w-[38px] lg:w-[40px] xl:w-[40px] 2xl:w-[50px] h-[2px] bg-[#D51317]"></div>
                  </div>
                </div>

                {event.type === "break" ? (
                  <AgendaCard
                    className="w-full lg:flex-1 rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg"
                    style={{ backgroundColor: event.bgColor }}
                  >
                    <AgendaCardContent className="pt-2.5 md:pt-1.5 lg:pt-1 xl:pt-1 2xl:pt-2 pb-2.5 md:pb-1.5 lg:pb-1 xl:pb-1 2xl:pb-2 pr-3 md:pr-2 lg:pr-1 xl:pr-1 2xl:pr-2 pl-6 md:pl-5.5 lg:pl-4 xl:pl-4 2xl:pl-6">
                      <p
                        className={`font-medium text-[14px] md:text-[13.5px] lg:text-[14px] xl:text-[14px] 2xl:text-[18px] text-center lg:text-left pl-0 lg:pl-0.5 xl:pl-0.5 2xl:pl-2 leading-snug ${interMedium.className}`}
                        style={{ color: event.textColor }}
                      >
                        {event.title}
                      </p>
                    </AgendaCardContent>
                  </AgendaCard>
                ) : event.type === "section-header" ? (
                  <AgendaCard className="w-full lg:flex-1 bg-[#dbf2ee] rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg relative overflow-hidden">
                    <AgendaCardContent className="pt-4 md:pt-4 lg:pt-3 xl:pt-3 2xl:pt-5 pb-4 md:pb-4 lg:pb-3 xl:pb-3 2xl:pb-5 pr-4 md:pr-4 lg:pr-3 xl:pr-3 2xl:pr-5 pl-4 md:pl-7 lg:pl-6 xl:pl-6 2xl:pl-10 relative z-10">
                      <h2 className={`font-bold text-[#0ca590] text-[20px] md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-4 text-center lg:text-left pl-0 lg:pl-2 xl:pl-2 2xl:pl-4 ${interBold.className}`}>
                        {event.title}
                      </h2>

                      <div className="space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                        {event.sessions?.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="relative">
                            {sessionIndex > 0 && (
                              <div className="mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-4">
                                <AgendaSeparator className="bg-[#0ca590] opacity-100" />
                              </div>
                            )}

                            <div className="flex items-start relative">
                              <div className="mr-2.5 md:mr-2.5 lg:mr-2 xl:mr-2 2xl:mr-3 mt-1 relative z-10 flex-shrink-0 ml-0 lg:ml-2 xl:ml-2 2xl:ml-4">
                                {renderDots(session.dots)}
                              </div>

                              <div className="flex-1 relative z-10">
                                <h3 className={`font-black text-[#255345] text-[17px] md:text-[16.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-tight mb-1.5 md:mb-1.5 lg:mb-0 xl:mb-0 2xl:mb-3 ${interBlack.className}`}>
                                  {session.title}
                                </h3>

                                <div className="space-y-1 md:space-y-1 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-2 xl:gap-2 2xl:gap-4 mt-1 lg:mt-1 xl:mt-1 2xl:mt-2">
                                  <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#0ca590] ${inter.className}`}>
                                    <span className="font-medium inline-block w-12 md:w-12 lg:inline">Room:</span>
                                    <span className="font-bold lg:ml-1"> {session.room}</span>
                                  </p>

                                  {session.cohostedBy ? (
                                    <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#f0783c] ${inter.className}`}>
                                      <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                      <span className="lg:ml-1">
                                        <span className="font-bold">{session.cohostedBy[0]}</span><span className="font-normal"> and </span><span className="font-bold">{session.cohostedBy[1]}</span>
                                      </span>
                                    </p>
                                  ) : (
                                    <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#f0783c] ${inter.className}`}>
                                      <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                      <span className="lg:ml-1">{renderHostName(session.hostedBy)}</span>
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AgendaCardContent>
                  </AgendaCard>
                ) : (
                  <AgendaCard className="w-full lg:flex-1 bg-[#dbf2ee] rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg relative">
                    <AgendaCardContent className="pt-4 md:pt-4 lg:pt-3 xl:pt-3 2xl:pt-5 pb-4 md:pb-4 lg:pb-3 xl:pb-3 2xl:pb-5 pr-4 md:pr-4 lg:pr-3 xl:pr-3 2xl:pr-5 pl-4 md:pl-7 lg:pl-6 xl:pl-6 2xl:pl-10">
                      <div className="flex items-start relative">
                        <div className="flex-1 relative z-10">
                          <h3 className={`font-black text-[#255345] text-[17px] md:text-[16.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-tight mb-1.5 md:mb-1.5 lg:mb-0 xl:mb-0 2xl:mb-3 ${interBlack.className}`}>
                            {event.title}
                          </h3>
                          <div className="space-y-1 md:space-y-1 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-2 xl:gap-2 2xl:gap-4 mt-1 lg:mt-1 xl:mt-1 2xl:mt-2">
                            {event.room && (
                              <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#0ca590] ${inter.className}`}>
                                <span className="font-medium inline-block w-12 md:w-12 lg:inline">Room:</span>
                                <span className="font-bold lg:ml-1"> {event.room}</span>
                              </p>
                            )}
                            {event.host && (
                              <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#f0783c] ${inter.className}`}>
                                <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                <span className="lg:ml-1">{renderHostName(event.host)}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </AgendaCardContent>
                  </AgendaCard>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Afternoon Sessions */}
          <div className="space-y-2.5 md:space-y-3.5 lg:space-y-4 xl:space-y-4 2xl:space-y-4">
            {afternoonEvents.map((event, index) => (
              <div key={index} className="block lg:flex lg:items-start lg:gap-4 xl:gap-4 2xl:gap-6">
                {/* Desktop: Time beside content */}
                <div className="lg:w-16 xl:w-16 2xl:w-20 lg:text-left lg:flex-shrink-0 lg:pt-1">
                  <p className={`font-bold text-[#255345] text-[19px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] ${interBold.className}`}>
                    {event.time}
                  </p>
                  {/* Desktop line under time */}
                  <div className="flex justify-start ml-4.5 lg:ml-5 xl:ml-5 2xl:ml-6">
                    <div className="w-[38px] lg:w-[40px] xl:w-[40px] 2xl:w-[50px] h-[2px] bg-[#D51317]"></div>
                  </div>
                </div>

                {event.type === "break" ? (
                  <AgendaCard
                    className="w-full lg:flex-1 rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg"
                    style={{ backgroundColor: event.bgColor }}
                  >
                    <AgendaCardContent className="pt-2.5 md:pt-1.5 lg:pt-1 xl:pt-1 2xl:pt-2 pb-2.5 md:pb-1.5 lg:pb-1 xl:pb-1 2xl:pb-2 pr-3 md:pr-2 lg:pr-1 xl:pr-1 2xl:pr-2 pl-6 md:pl-5.5 lg:pl-4 xl:pl-4 2xl:pl-6">
                      <p
                        className={`font-medium text-[14px] md:text-[13.5px] lg:text-[14px] xl:text-[14px] 2xl:text-[18px] text-center lg:text-left pl-0 lg:pl-0.5 xl:pl-0.5 2xl:pl-2 leading-snug ${interMedium.className}`}
                        style={{ color: event.textColor }}
                      >
                        {event.title}
                      </p>
                    </AgendaCardContent>
                  </AgendaCard>
                ) : event.type === "afternoon-sessions" ? (
                  <AgendaCard className="w-full lg:flex-1 bg-[#dbf2ee] rounded-[10px] md:rounded-[12px] shadow-lg lg:shadow-lg relative overflow-hidden">
                    <AgendaCardContent className="pt-4 md:pt-5 lg:pt-3 xl:pt-4 2xl:pt-5 pb-4 md:pb-5 lg:pb-3 xl:pb-4 2xl:pb-5 pr-4 md:pr-5 lg:pr-3 xl:pr-4 2xl:pr-5 pl-4 md:pl-8 lg:pl-6 xl:pl-8 2xl:pl-10 relative z-10">
                      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-1 lg:gap-3 mb-3 md:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">
                        <h2 className={`font-bold text-[#0ca590] text-[18px] md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-center lg:text-left pl-0 lg:pl-2 xl:pl-3 2xl:pl-4 ${interBold.className}`}>
                          {event.title}
                        </h2>
                        <span className={`
                          text-[#f0783c] 
                          text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 
                          font-medium 
                          ${inter.className} 
                          bg-white/80 
                          backdrop-blur-sm 
                          px-3 py-1 
                          rounded-full 
                          border border-[#f0783c]/20
                          shadow-sm
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:shadow-md
                          flex items-center gap-1
                        `}>
                          <span className="text-[#f0783c] font-bold">*</span>
                          Invitation-Only Sessions
                        </span>
                      </div>

                      <div className="space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                        {event.sessions?.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="relative">
                            {sessionIndex > 0 && (
                              <div className="mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-4">
                                <AgendaSeparator className="bg-[#0ca590] opacity-100" />
                              </div>
                            )}

                            <div className="flex items-start relative">
                              <div className="mr-2.5 md:mr-2.5 lg:mr-2 xl:mr-2 2xl:mr-3 mt-1 relative z-10 flex-shrink-0 ml-0 lg:ml-2 xl:ml-2 2xl:ml-4">
                                {renderDots(session.dots)}
                              </div>

                              <div className="flex-1 relative z-10">
                                <h3 className={`font-black text-[#255345] text-[17px] md:text-[16.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-tight mb-1.5 md:mb-1.5 lg:mb-0 xl:mb-0 2xl:mb-3 ${interBlack.className}`}>
                                  {session.title}
                                </h3>

                                <div className="space-y-1 md:space-y-1 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-2 xl:gap-2 2xl:gap-4 mt-1 lg:mt-1 xl:mt-1 2xl:mt-2">
                                  <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#0ca590] ${inter.className}`}>
                                    <span className="font-medium inline-block w-12 md:w-12 lg:inline">Room:</span>
                                    <span className="font-bold lg:ml-1"> {session.room}</span>
                                  </p>

                                  <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#F0783C] ${inter.className}`}>
                                    <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                    <span className="lg:ml-1">{renderHostName(session.hostedBy)}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AgendaCardContent>
                  </AgendaCard>
                ) : event.type === "session" ? (
                  <AgendaCard className="w-full lg:flex-1 bg-[#dbf2ee] rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg relative">
                    <AgendaCardContent className="pt-4 md:pt-4 lg:pt-3 xl:pt-3 2xl:pt-5 pb-4 md:pb-4 lg:pb-3 xl:pb-3 2xl:pb-5 pr-4 md:pr-4 lg:pr-3 xl:pr-3 2xl:pr-5 pl-6 md:pl-7 lg:pl-6 xl:pl-6 2xl:pl-10">
                      <div className="flex items-start relative">
                        {event.dots && (
                          <div className="mr-2.5 md:mr-2.5 lg:mr-2 xl:mr-2 2xl:mr-2.5 mt-1 relative z-10 flex-shrink-0 ml-0 lg:ml-2 xl:ml-2 2xl:ml-2.5">
                            {renderDots(event.dots)}
                          </div>
                        )}

                        <div className="flex-1 relative z-10">
                          <h3 className={`font-black text-[#255345] text-[17px] md:text-[16.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px] leading-tight mb-1.5 md:mb-1.5 lg:mb-0 xl:mb-0 2xl:mb-3 ${interBlack.className}`}>
                            {event.title}
                          </h3>
                          <div className="space-y-1 md:space-y-1 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-2 xl:gap-2 2xl:gap-4 mt-1 lg:mt-1 xl:mt-1 2xl:mt-2">
                            {event.room && (
                              <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#0ca590] ${inter.className}`}>
                                <span className="font-medium inline-block w-12 md:w-12 lg:inline">Room:</span>
                                <span className="font-bold lg:ml-1"> {event.room}</span>
                              </p>
                            )}
                            {event.hostedBy && (
                              <p className={`text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[15px] text-[#f0783c] ${inter.className}`}>
                                <span className="font-medium inline-block w-12 md:w-12 lg:inline">Hosted By:</span>
                                <span className="lg:ml-1">{renderHostName(event.hostedBy)}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </AgendaCardContent>
                  </AgendaCard>
                ) : null}
              </div>
            ))}

            {/* Tracks Card */}
            <div className="block lg:flex lg:items-start lg:gap-4 xl:gap-4 2xl:gap-6 mt-4 md:mt-4">
              {/* Desktop: Empty space to align with time column */}
              <div className="lg:w-16 xl:w-16 2xl:w-20 lg:flex-shrink-0"></div>
              
              <AgendaCard className="w-full lg:flex-1 bg-white rounded-[10px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[12px] 2xl:rounded-[16px] shadow-lg lg:shadow-lg xl:shadow-[2px_2px_15px_#00000040]">
                <AgendaCardContent className="pt-4 md:pt-4 lg:pt-3 xl:pt-3 2xl:pt-5 pb-4 md:pb-4 lg:pb-3 xl:pb-3 2xl:pb-5 pr-4 md:pr-4 lg:pr-3 xl:pr-3 2xl:pr-5 pl-6 md:pl-7 lg:pl-6 xl:pl-6 2xl:pl-10">
                  <h2 className={`font-bold text-[#0ca590] text-[18px] md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl mb-3 md:mb-3 lg:mb-2 xl:mb-2 2xl:mb-4 text-center lg:text-left pl-0 lg:pl-2 xl:pl-2 2xl:pl-4 ${interBold.className}`}>
                    Tracks
                  </h2>

                  <div className="space-y-3 md:space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                    {tracks.map((track, index) => (
                      <div key={index} className="flex items-center gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">
                        <div
                          className="w-[12px] h-[12px] rounded-[6px] flex-shrink-0 ml-0 lg:ml-1 xl:ml-1 2xl:ml-2"
                          style={{ backgroundColor: track.color }}
                        />
                        <p className={`font-bold text-[#255345] text-[15px] md:text-[14.5px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] leading-tight ${interBold.className}`}>
                          {track.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </AgendaCardContent>
              </AgendaCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
