var config = {
  container: "map",
  style: "mapbox://styles/erikrenglish/cldyufb1n001601msm8wajtqm",
  accessToken:
    "pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNqNXdnZDdnNTBlMDcyd3FzNHg5YjNsN3kifQ.kDgqHDJ00xCjvUXy8x57UA",
  showMarkers: false,
  markerColor: "#3FB1CE",
  projection: "globe",

  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  legend: true, // if legend is set to true, inset will be disabled.
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  useCustomLayers: false, //set true for enabling custom layers from sources.js
  bookmarks: true,
  chapterReturn: false,
  logo: "",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="https://cdn-icons-png.flaticon.com/512/41/41707.png">', // to add custom messaging in the header for mobile devices
  footer: "",

  chapters: [
    
      //JANUARY
    
       {
      id: "jan22",
      alignment: "left",
      hidden: false,
      title: "Prelude to invasion",
      image:
        "https://www.adl.org/sites/default/files/2022-03/ukrainian-children-are-fleeing-russian-aggression-flickr-51913859740.jpg",
      caption:
        '<a href="https://commons.wikimedia.org/wiki/File:Ukrainian_children_are_fleeing_Russian_aggression._Przemy%C5%9Bl,_Poland_27_02_2022_(51913859740).jpg">Mirek Pruchnicki from Przemyśl, Sanok, Polska</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>January 2022</b></span>",
      description:
        "In March and April 2021, Russia began a assembling military resources near the Ukraine border. A second assembly occurred between October 2021 and February 2022 in Russia and Belarus. Despite members of the Russian government denying any plans to attack Ukraine, President Biden predicted that Russia would begin to ‘move in’, because ’he has to do something’. On January 24th, NATO put forces on standby and reinforced eastern Europe with more ships and fighter jets.",
      location: {
        center: [31.50849, 49.41084],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
            
         {
          layer: "country-boundaries",
          opacity: 0,
        },
         {
          layer: "water",
          opacity: 0,
        },,
      ],
      onChapterExit: [
        {
          
        },
      ],
    },
    
    //FEBRUARY
    
       {
      id: "feb22",
      alignment: "left",
      hidden: false,
      title: "Russia invades",
      image:
        "https://thebulletin.org/wp-content/uploads/2022/02/putin.png.webp",
      caption:
        "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>February 2022</b></span>",
      description:
'<span data-contrast="auto">On February 24</span><span data-contrast="auto">th</span><span data-contrast="auto">, Vladimir Putin launched a “special military operation” </span><span data-contrast="auto">against Ukraine. </span><a href="https://thebulletin.org/2022/02/europes-darkest-hour-war-in-a-radioactive-zone-and-fleeing-citizens-putin-invades-ukraine/#post-heading"><span data-contrast="none">Russian forces attacked</span></a><span data-contrast="auto"> from the separatist areas in the East, targeting Luhansk; near the Black Sea in the South, cutting off naval access; and through Belarus in the North, targeting Kyiv and the Chernobyl Exclusion area. Absurdly, at the moment the invasion began, Russia’s ambassador to the UN was </span><a href="https://thebulletin.org/2022/02/video-what-russias-invasion-of-ukraine-looks-like/#post-heading"><span data-contrast="none">presiding over a Security Council meeting</span></a><span data-contrast="auto"> to prevent war.</span><br></br><span data-contrast="auto">While Russian forces were able to </span><a href="https://thebulletin.org/2022/02/russian-forces-now-control-chernobyl-inviting-speculation-and-uncertainty/#post-heading"><span data-contrast="none">take control of Chernobyl,</span></a><span data-contrast="auto"> Russia’s attempts to quicky seize Kyiv were unsuccessful, which led Putin to </span><a href="https://thebulletin.org/2022/02/video-ukraine-invasion-intensifies-as-world-watches/#post-heading"><span data-contrast="none">ratchet up his rhetoric</span></a><span data-contrast="auto"> and raise the </span><a href="https://thebulletin.org/2022/02/ukraine-update-ukrainian-forces-continue-stiff-resistance-putin-raises-nuclear-alert-status-ukrainian-and-russian-delegations-to-enter-talks/#post-heading"><span data-contrast="none">nuclear alert status</span></a><span data-contrast="auto">. Meanwhile, a long-standing disinformation campaign around the existence of a US bioweapons program in Ukraine prompts concerns that research labs could be attacked accidentally, releasing </span><a href="https://thebulletin.org/2022/02/us-official-russian-invasion-of-ukraine-risks-release-of-dangerous-pathogens/#post-heading"><span data-contrast="none">dangerous pathogens</span></a><span data-contrast="auto"> and fueling further disinformation narratives.</span>',      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "feb22",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "feb22",
          opacity: 1,
        },
      ],
    },
    
          // MARCH

    {
      id: "mar22",
      alignment: "left",
      hidden: false,
      title: "Russia advances",
      image:
        "https://thebulletin.org/wp-content/uploads/2022/03/People_on_a_metro_station_during_Russian_invasion_Kyiv_2022.jpeg.webp",
      caption:
        "Station of Kyiv Metro, converted into a shelter after Russian invasion of Ukraine (2022). Credit: https://kmr.gov.ua/uk/content/volodymyr-bondarenko-zaklykav-kyyan-obyednaty-zusyllya-zadlya-dopomogy-spivgromadyanam. CC BY 4.0.",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>March 2022</b></span>",
      description:
'<span data-contrast="auto">An anonymous writer in St. Petersburg highlighted the reality that at the beginning of March many </span><a href="https://thebulletin.org/2022/03/letter-from-st-petersburg-many-russians-dont-even-know-theres-a-war/#post-heading"><span data-contrast="none">Russians didn’t know there was a war</span></a><span data-contrast="auto">. By this point in early March, </span><a href="https://thebulletin.org/2022/03/humanitarian-crisis-660000-ukrainian-refugees-so-far-millions-expected-follow/#post-heading"><span data-contrast="none">nearly 1 million Ukrainians</span></a><span data-contrast="auto"> had already fled the country.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Food and energy prices began to rise, especially in the developing world and concerns about </span><a href="https://thebulletin.org/2022/03/whats-eating-putin/#post-heading"><span data-contrast="none">Vladimir Putin’s mindset amid his extreme isolation</span></a><span data-contrast="auto"> contribute to worries about the </span><a href="https://thebulletin.org/2022/03/global-collapse-is-in-view/#post-heading"><span data-contrast="none">war’s long term consequences</span></a><span data-contrast="auto">. The Bulletin’s Science and Security Board condemns the Russian invasion of Ukraine, but the Doomsday Clock remains at </span><a href="https://thebulletin.org/2022/03/bulletin-science-and-security-board-condemns-russian-invasion-of-ukraine-doomsday-clock-stays-at-100-seconds-to-midnight/#post-heading"><span data-contrast="none">100 seconds to midnight</span></a><span data-contrast="auto">.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "feb22",
          opacity: 0,
        },
        {
          layer: "mar3122",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "mar3122",
          opacity: 0,
        },
      ],
    },
    
    // MARCH

    {
      id: "mar22-2",
      alignment: "left",
      hidden: false,
      title: "Attacking Zaporizhzhia",
      image: "",
      caption:"",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>March 2022</b></span>",
      description:
'<span data-contrast="auto">Russia began its attack on the </span><a href="https://thebulletin.org/2022/03/what-experts-say-an-attack-on-a-ukrainian-nuclear-power-plant-could-do/#post-heading"><span data-contrast="none">Zaporizhzhia nuclear plant</span></a><span data-contrast="auto">, Europe’s largest nuclear plant, setting off months of alarm. The advance on Kyiv stalled as Russia </span><a href="https://thebulletin.org/2022/03/russia-amplifies-bioweapons-claims-at-the-united-nations-security-council/#post-heading"><span data-contrast="none">doubled down on bioweapons disinformation</span></a><span data-contrast="auto"> at the UN Security Council. Elsewhere, other international negotiations on other issues, like climate and </span><a href="https://thebulletin.org/2022/03/in-striking-ukraine-russia-also-hit-nuclear-arms-control/#post-heading"><span data-contrast="none">nuclear arms control</span></a><span data-contrast="auto">, begin to </span><a href="https://thebulletin.org/2022/03/russias-war-has-chilling-effect-on-climate-science-as-arctic-temperatures-soar/#post-heading"><span data-contrast="none">lose traction and scientists fear reprisal</span></a><span data-contrast="auto">.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',
      location: {
        center: [34.58649833907841, 47.513037831183325],
        zoom: 14,
        pitch: 45,
        bearing: 150,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        
         {
          layer: "mar3122",
          opacity: 0,
        },
        {
          layer: "water",
          opacity: 0,
        },
        {
          layer: "country-boundaries",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
           layer: "",
           opacity: 0,
        },
      ],
    },
    
            // APRIL


    {
      id: "apr22",
      alignment: "left",
      hidden: false,
      title: "Pivot to the east",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Russian_invasion_of_Ukraine_in_Luhansk_Oblast%2C_March_2022_%2801%29.jpg?20220314190355",
      caption: '<a href="https://commons.wikimedia.org/wiki/File:Russian_invasion_of_Ukraine_in_Luhansk_Oblast,_March_2022_(01).jpg">Dsns.gov.ua</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>April 2022</b></span>",
      description:
'<span data-contrast="auto">A Ukrainian counter-offensive effort began at the end of March amid </span><a href="https://thebulletin.org/2022/04/russia-committed-war-crimes-but-are-they-genocide/#post-heading"><span data-contrast="none">reports of Russian war crimes</span></a><span data-contrast="auto">. By the beginning of April, Russian troops had retreated from the areas around Kyiv and </span><a href="https://thebulletin.org/2022/04/russian-forces-leave-chernobyl-un-watchdog-offers-ukraine-more-help/#post-heading"><span data-contrast="none">Chernobyl</span></a><span data-contrast="auto">, shifting their focus towards the Donetsk and Luhansk regions in the east. According to a </span><a href="https://thebulletin.org/2022/04/illia-ponomarenko-ukraines-most-followed-war-journalist-is-a-dude-from-donbas/#post-heading"><span data-contrast="none">Ukrainian journalist in the Donbas region</span></a><span data-contrast="auto">, “Russia has failed to demoralize and destabilize our society.”</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Around the world, long term implications of the war begin to emerge as rising prices show the need for </span><a href="https://thebulletin.org/2022/04/global-hunger-crisis-looms-as-war-in-ukraine-sends-food-prices-soaring/#post-heading"><span data-contrast="none">more resilient food systems</span></a><span data-contrast="auto">, Russia and China amplify </span><a href="https://thebulletin.org/2022/04/in-search-of-a-new-world-order-russia-and-china-team-up-to-push-ukraine-propaganda/#post-heading"><span data-contrast="none">disinformation campaigns</span></a><span data-contrast="auto">, and concerns around </span><a href="https://thebulletin.org/2022/04/will-putin-go-nuclear-a-timeline-of-expert-comments/#post-heading"><span data-contrast="none">nuclear escalation</span></a><span data-contrast="auto"> grow.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
           {
          layer: "apr22",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "apr22",
          opacity: 0,
        },
      ],
    },
    
    //MAY

    {
      id: "may22",
      alignment: "left",
      hidden: false,
      title: "Mariupol falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/%D0%9D%D0%B0%D1%81%D0%BB%D1%96%D0%B4%D0%BA%D0%B8_%D0%BE%D0%B1%D1%81%D1%82%D1%80%D1%96%D0%BB%D1%83_%D0%B4%D0%B8%D1%82%D1%8F%D1%87%D0%BE%D1%97_%D0%BB%D1%96%D0%BA%D0%B0%D1%80%D0%BD%D1%96_%D1%82%D0%B0_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D1%83_%D0%B2_%D0%9C%D0%B0%D1%80%D1%96%D1%83%D0%BF%D0%BE%D0%BB%D1%96%2C_9_%D0%B1%D0%B5%D1%80%D0%B5%D0%B7%D0%BD%D1%8F_2022_%D1%80%D0%BE%D0%BA%D1%83.jpg",
      caption: "A children's hospital in Mariupol after a Russian airstrike",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>May 2022</b></span>",
      description:
'<span data-contrast="auto">Ukrainian fighters in Mariupol surrender to Russian forces as Sweden and Finland announce that they will join NATO. For Sweden, this ends two hundred years of neutrality. </span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">In a show of unity, the European Commission announced a 220 billion plan to shift away from Russian fossil fuels while President Biden agreed to send High Mobility Artillery Rocket Systems (HIMARS) with 50-mile range to Ukraine.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Meanwhile, surveys across all 50 US states showed the </span><a href="https://thebulletin.org/2022/05/survey-americans-love-conspiracy-theories-and-thats-dangerous-for-everyone/#post-heading"><span data-contrast="none">effectiveness of misinformation</span></a><span data-contrast="auto"> to muddy the waters, with those holding misperceptions about Ukraine harboring more favorable opinions about Russia.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [37.54970, 47.09718],
        zoom: 12,
        pitch: 60,
        bearing: -20.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "apr22",
          opacity: 0,
        },
         {
          layer: "country-boundaries",
          opacity: 0,
        },
         {
          layer: "water",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "settlement-major-label",
          opacity: 0,
        },
      ],
    },
    
    //JUNE

    {
      id: "jun22",
      alignment: "left",
      hidden: false,
      title: "Walking on a tightrope",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9_%D0%91%D1%8B%D0%BA%D0%BE%D0%B2_368.jpg/640px-%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9_%D0%91%D1%8B%D0%BA%D0%BE%D0%B2_368.jpg",
      caption: "Russian patrol ship Vasily Bykov that attacked Snake Island. The Kremlin, CC BY-SA 4.0 (Wikimedia Commons)",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>June 2022</b></span>",
      description:
'<span data-contrast="auto">In the </span><a href="https://thebulletin.org/2022/06/has-the-russia-ukraine-war-blown-up-the-global-nuclear-order/#post-heading"><span data-contrast="none">leadup to the Non-Proliferation Treaty review conference</span></a><span data-contrast="auto">, the war in Ukraine both strengthened calls for nuclear deterrence while also increasing interest in nuclear proliferation as a means of security. Meanwhile, Putin compared himself to Peter the Great as Ukraine reclaimed Snake Island, where soldiers famously responded to a Russian warship’s warnings with “Russian warship, go fuck yourself”. The ship had sunk two months prior.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">The Phoenix Ghost drones announced as part of a US assistance package to Ukraine in April are part of a “</span><a href="https://thebulletin.org/2022/06/phoenix-ghosts-are-part-drones-part-missiles-how-does-that-change-combat/#post-heading"><span data-contrast="none">global phenomenon</span></a><span data-contrast="auto">” of loitering munitions, which presents challenges for drone proliferation.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [30.203545644310157, 45.25487550430633],
        zoom: 15,
        pitch: 45,
        bearing: 25,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "roman-empire-180",
          opacity: 0.5,
        },
        {
          layer: "byzantium",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "roman-empire-180",
          opacity: 0,
        },
      ],
    },

       //JULY

    {
      id: "jul22",
      alignment: "left",
      hidden: false,
      title: "Luhansk falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Russian_invasion_of_Ukraine_in_Luhansk_Oblast%2C_March_2022_%2801%29.jpg/640px-Russian_invasion_of_Ukraine_in_Luhansk_Oblast%2C_March_2022_%2801%29.jpg",
      caption: "(Wikimedia Commons)",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>July 2022</b></span>",
      description:
'<span data-contrast="auto">In the East, Luhansk fell under Russian control while the two countries agreed to allow grain shipments from Ukraine through the Black Sea. </span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Russia tried to advance </span><a href="https://thebulletin.org/2022/07/russia-finds-another-stage-for-the-ukraine-biolabs-disinformation-show/#post-heading"><span data-contrast="none">debunked claims of illegal bioweapons labs</span></a><span data-contrast="auto"> through the Biological Weapons Convention and reports showed that missiles had </span><a href="https://thebulletin.org/2022/07/ukraine-forges-ahead-with-nuclear-power/#post-heading"><span data-contrast="none">damaged buildings</span></a><span data-contrast="auto"> at the Zaporizhzhia nuclear power plant. </span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559685&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Russia and Belarus announced a </span><a href="https://thebulletin.org/2022/07/russia-belarus-nuclear-sharing-would-mirror-natos-and-worsen-europe-security/#post-heading"><span data-contrast="none">plan to retrofit Belarussian planes</span></a><span data-contrast="auto"> with Russian weapons and train the pilots in Russia. A Kremlin spokesperson clarified that the plan would not involve nuclear weapons but that the planes would be “technically capable” of carrying them. The only remaining nuclear nonproliferation agreement is </span><a href="https://thebulletin.org/2022/07/reviving-arms-control-post-ukraine-why-new-start-still-matters/#post-heading"><span data-contrast="none">New START,</span></a><span data-contrast="auto"> which has been extended but negotiations to build beyond seem grim.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559685&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "jul3122",
          opacity: 1,
        },
         {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "jul3122",
          opacity: 0,
        },
      ],
    },

        //AUGUST

    {
      id: "aug22",
      alignment: "left",
      hidden: false,
      title: "Gas exports stop",
      image: "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmwzNzQzOTI1OTU3MS1pbWFnZS1rcHFrOG4ycS5qcGc.jpg",
      caption: "Gas pipelines through mountains (Public domain, Rawpixel)",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>August 2022</b></span>",
      description:
'<span data-contrast="auto">Ukraine launches counteroffensive in the Kherson region and begins using Western-supplied weapons (HIMARS). Ukraine attacks Russian airbase in Crimea and shelling around Zaporizhzhia.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">A ship loaded with grain leaves Ukraine for the first time since the Russian blockade, but disruptions to the food supply already </span><a href="https://thebulletin.org/2022/08/how-climate-crises-and-global-conflict-combine-to-threaten-millions-in-the-horn-of-africa/#post-heading"><span data-contrast="none">risk famine in the Horn of Africa</span></a><span data-contrast="auto"> and beyond.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
           center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "aug3122",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "aug3122",
          opacity: 0,
        },
         {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
        
      ],
    },

        //SEPTEMBER

    {
      id: "sep22",
      alignment: "left",
      hidden: false,
      title: "The IAEA travels to Zaporizhzhia",
      image: "https://media.cnn.com/api/v1/images/stellar/prod/220829135620-iaea-team-082922.jpg?c=16x9&q=h_720,w_1280,c_fill",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>September 2022</b></span>",
      description:
'<span data-contrast="auto">After Ukraine retook 1,000 square miles of territory from Russian forces, Vladimir Putin announced a partial mobilization of the military and made an </span><a href="https://thebulletin.org/2022/09/not-a-bluff-losing-ground-in-ukraine-putin-raises-nuclear-threats/#post-heading"><span data-contrast="none">indirect threat to use nuclear weapons</span></a><span data-contrast="auto">: “In the event of a threat to the territorial integrity of our country and to defend Russia and our people, we will certainly make use of all weapon systems available to us. This is not a bluff.”</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">The </span><a href="https://thebulletin.org/2022/09/iaea-arrives-at-the-zaporizhzhia-nuclear-power-plant-for-its-riskiest-mission-in-history/#post-heading"><span data-contrast="none">IAEA inspected the Zaporizhzhia nuclear power plant,</span></a><span data-contrast="auto"> after which the IAEA Director General Rafael Mariano Grossi told journalists “It is obvious the physical integrity of the plant has been violated, several times. This is a reality that cannot continue to happen.” Nuclear experts </span><a href="https://thebulletin.org/2022/09/a-ukrainian-expert-assesses-the-possible-impact-of-a-military-attack-on-the-zaporizhzhia-nuclear-power-plant/#post-heading"><span data-contrast="none">weighed in</span></a><span data-contrast="auto"> on the situation and </span><a href="https://thebulletin.org/2022/09/a-nuclear-safety-experts-view-on-the-crisis-at-the-zaporizhzhia-nuclear-power-plant/#post-heading"><span data-contrast="none">proposed actions</span></a><span data-contrast="auto"> to ensure the safety of the plant.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "sep3022",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "sep3022",
          opacity: 1,
        },
         {
          layer: "country-boundaries",
          opacity: 0,
        },
         {
          layer: "water",
          opacity: 0,
        },
      ],
    },

        //OCTOBER

    {
      id: "oct22", 
      alignment: "left",
      hidden: false,
      title: "A daring bridge attack",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D1%81%D1%82_%28%D0%A0%D0%BE%D1%81%D0%B0%D0%B2%D1%82%D0%BE%D0%B4%D0%BE%D1%80%29_5.jpg",
      caption: "Rosavtodor.ru, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>October 2022</b></span>",
      description:
'<span data-contrast="auto">Ukraine orchestrated an attack on the Kerch Straight Bridge, which links Crimea to Russia. Crimea already saw multiple attacks that use </span><a href="https://thebulletin.org/2022/10/water-as-weapon-and-casualty-in-russias-war-on-ukraine/#post-heading"><span data-contrast="none">water as a weapon.</span></a> <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Russia announced the annexation of four Ukrainian regions: Luhansk, Donetsk, Kherson and Zaporizhzhia, where </span><a href="https://thebulletin.org/2022/10/zaporizhzhia-on-the-brink-how-deteriorating-conditions-at-the-nuclear-power-plant-could-lead-to-disaster/#post-heading"><span data-contrast="none">conditions at the nuclear power plant</span></a><span data-contrast="auto"> continue to worsen and </span><a href="https://thebulletin.org/2022/10/russian-actions-at-zaporizhzhia-show-need-for-better-legal-protections-of-nuclear-installations/#post-heading"><span data-contrast="none">draw criticism</span></a><span data-contrast="auto">.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span><br></br><span data-contrast="auto">Fears of a </span><a href="https://thebulletin.org/2022/10/winter-is-coming-europes-huge-geopolitical-blunder-on-russian-energy/#post-heading"><span data-contrast="none">harsh winter in Europe</span></a><span data-contrast="auto"> worsen as Russia flexes gas as weapon that the EU once saw as a tool.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>',
      location: {
        center: [36.50722145747586, 45.25105871306672],
        zoom: 10.5,
        pitch: 45,
        bearing: 45,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
        layer: "sep3022",
          opacity: 0,
        },
      ],
      onChapterExit: [
        
         {
          layer: "country-boundaries",
          opacity: 0,
        },
         {
          layer: "water",
          opacity: 0,
        },
      ],
    },

        //NOVEMBER

    {
      id: "nov22",
      alignment: "left",
      hidden: false,
      title: "NATO expansion",
      image: "https://cdn2.picryl.com/photo/2018/10/27/a-swedish-finnish-battalion-is-taking-part-in-the-7cdcf5-1024.jpg",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>November 2022</b></span>",
      description:
        "“Putin claimed to be worried about NATO expansion—and as a result of his invasion, Sweden and Finland are now both coming into NATO.” Russia withdraws from Kherson.",
      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "nov3022",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "nov3022",
          opacity: 0,
        },
        
      ],
    },
        //DECEMBER

    {
      id: "dec22",
      alignment: "left",
      hidden: false,
      title: "Attacking deep inside Russia",
      image: "https://s.abcnews.com/images/International/airbase-gty-er-221205_1670281014711_hpMain_16x9_992.jpg",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>December 2022</b></span>",
      description:
        "Ukraine stages attacks on military bases hundreds of miles inside Russia.",
      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "dec2622",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "dec2622",
          opacity: 0,
        },
        
      ],
    },

        //JANUARY 23

    {
      id: "jan23",
      alignment: "left",
      hidden: false,
      title: "Doomsday clock moves forward",
      image: "https://thebulletin.org/wp-content/uploads/2023/01/2023DoomsdayClockAnnouncementYT.png.webp",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>January 2023</b></span>",
      description:
        "The Doomsday Clock moved forward to 90 seconds to midnight.",
      location: {
        center: [31.50849, 49.41084],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "jan3123",
          opacity: 1,
        },
        {
          layer: "country-boundaries",
          opacity: 1,
        },
         {
          layer: "water",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "jan3123",
          opacity: 0,
        },
        
      ],
    },

        //FEBRUARY 23

    {
      id: "feb23",
      alignment: "left",
      hidden: false,
      title: "A global alarm clock",
      image: "https://thebulletin.org/wp-content/uploads/2023/02/UN7945824_202281_LF_2979_.jpg.webp",
      caption: "UN Secretary-General António Guterres delivers remarks at the opening meeting the Tenth Review Conference of the Nuclear Non-Proliferation Treaty in August 2022. On Monday, before the General Assembly, the secretary-general highlighted his nuclear concerns and extended them to the full range of existential threats the world faces. (Image UN Photo/Loey Felipe)",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>February 2023</b></span>",
      description:
        "The Doomsday Clock is a global alarm clock.",
      location: {
        center: [31.50849, 49.41084],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
            
         {
          layer: "country-boundaries",
          opacity: 0,
        },
         {
          layer: "water",
          opacity: 0,
        },,
      ],
      onChapterExit: [
        {
          
        },
      ],
    },

       
  ],
};
