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
  bookmarks: false,
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
        'Ukrainian children fleeing Russian aggression (<a href="https://commons.wikimedia.org/wiki/File:Ukrainian_children_are_fleeing_Russian_aggression._Przemy%C5%9Bl,_Poland_27_02_2022_(51913859740).jpg">Mirek Pruchnicki from Przemyśl, Sanok, Polska</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons)',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>Pre-invasion</b></span>",
      description:
'Between March 2021 and February 2022, Russia began assembling in waves “somewhere between 150,000 and 190,000 Russian troops” near Ukraine’s borders with Russia and Belarus. On January 24th, NATO put its forces on standby and reinforced eastern Europe with more ships and fighter jets.<br></br>The <em>Bulletin’s </em>coverage from the day before the invasion looked back on <a href="https://thebulletin.org/2022/02/in-a-historic-moment-the-west-cannot-look-away-from-ukraine/#post-heading">Ukraine returning nuclear weapons to Russia</a> after the fall of the Soviet Union and the security guarantees made in response, the <a href="https://thebulletin.org/2022/02/ukraine-2022-flashback-to-crimea-1993-prague-spring-1968/#post-heading">complicated dynamics and history of the region</a>, and highlighted the strategic and symbolic value of Crimea and the parallels with the Soviet occupation of Czechoslovakia.',
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
          layer: "feb22",
          opacity: 0,
        },
        {
          layer: "apr22",
          opacity: 0,
        },
        {
          layer: "feb2123",
          opacity: 0,
        },{
          layer: "mar3122",
          opacity: 0,
        },
        {
          layer: "jul3122",
          opacity: 0,
        },
        {
          layer: "nov3022",
          opacity: 0,
        },
        {
          layer: "aug3122",
          opacity: 0,
        },
        {
          layer: "sep3022",
          opacity: 0,
        },
        {
          layer: "dec2622",
          opacity: 0,
        },
        {
          layer: "jan3123",
          opacity: 0,
        },
        {
          layer: "water",
          opacity: 0,
        },
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
        "Russia has invaded Ukraine. Pictured is President Vladimir Putin, who announced the invasion Wednesday. (The Kremlin)",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>February 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span>",
      description:
'On February 24<sup>th</sup>, 2022, Vladimir Putin launched a “special military operation” against Ukraine, an action that had previously been “<a href="https://thebulletin.org/2022/02/russias-invasion-of-ukraine-invalidates-key-international-relations-assumptions/#post-heading">unthinkable</a>”. <a href="https://thebulletin.org/2022/02/europes-darkest-hour-war-in-a-radioactive-zone-and-fleeing-citizens-putin-invades-ukraine/#post-heading">Russian forces attacked</a> from separatist areas in the east of Ukraine, targeting Luhansk near the Black Sea in the South, cutting off naval access; and through Belarus in the North, targeting Kyiv and the Chernobyl Exclusion area. At the moment the invasion began, Russia’s ambassador to the UN was <a href="https://thebulletin.org/2022/02/video-what-russias-invasion-of-ukraine-looks-like/#post-heading">presiding over a Security Council meeting</a> ostensibly intending to avoid the war that had just began.<br></br>While Russian forces were able to <a href="https://thebulletin.org/2022/02/russian-forces-now-control-chernobyl-inviting-speculation-and-uncertainty/#post-heading">take control of Chernobyl,</a> Russia’s attempts to quickly seize Kyiv were unsuccessful, causing Putin to <a href="https://thebulletin.org/2022/02/video-ukraine-invasion-intensifies-as-world-watches/#post-heading">ratchet up his rhetoric</a> and raise the <a href="https://thebulletin.org/2022/02/ukraine-update-ukrainian-forces-continue-stiff-resistance-putin-raises-nuclear-alert-status-ukrainian-and-russian-delegations-to-enter-talks/#post-heading">nuclear alert status</a>. Meanwhile, concerns that US-linked research labs in Ukraine could be damaged increased as Russia continued to push a debunked disinformation campaign around an illegal bioweapons program. An attack on a research lab, intentional or accidental, risked the release of <a href="https://thebulletin.org/2022/02/us-official-russian-invasion-of-ukraine-risks-release-of-dangerous-pathogens/#post-heading">dangerous pathogens</a>.',         
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
        'Kyiv residents seek shelter in subway station (<a href="https://commons.wikimedia.org/wiki/File:People_on_a_metro_station_during_Russian_invasion,_Kyiv,_2022.jpg">Kmr.gov.ua</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons)',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>March 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span>",
      description:
'An anonymous contributor to the <em>Bulletin</em> wrote from St. Petersburg that at the beginning of March many <a href="https://thebulletin.org/2022/03/letter-from-st-petersburg-many-russians-dont-even-know-theres-a-war/#post-heading">Russians didn’t know there was a war</a>. By early March, <a href="https://thebulletin.org/2022/03/humanitarian-crisis-660000-ukrainian-refugees-so-far-millions-expected-follow/#post-heading">nearly 1 million Ukrainians</a> had already fled the country.<br></br>As a result of the invasion, food and energy prices began to rise, especially in the developing world, and concerns about <a href="https://thebulletin.org/2022/03/whats-eating-putin/#post-heading">Vladimir Putin’s mindset amid his extreme isolation</a> contributed to worries about the <a href="https://thebulletin.org/2022/03/global-collapse-is-in-view/#post-heading">war’s long term consequences</a>. The <em>Bulletin’s</em> Science and Security Board condemned the Russian invasion of Ukraine; but the Doomsday Clock remained at <a href="https://thebulletin.org/2022/03/bulletin-science-and-security-board-condemns-russian-invasion-of-ukraine-doomsday-clock-stays-at-100-seconds-to-midnight/#post-heading">100 seconds to midnight</a> in 2022.',
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
'Russia began its attack on the <a href="https://thebulletin.org/2022/03/what-experts-say-an-attack-on-a-ukrainian-nuclear-power-plant-could-do/#post-heading">Zaporizhzhia nuclear plant</a>, Europe’s largest nuclear plant, setting off months of alarm. The advance on Kyiv stalled as Russia <a href="https://thebulletin.org/2022/03/russia-amplifies-bioweapons-claims-at-the-united-nations-security-council/#post-heading">doubled down on bioweapons disinformation</a> at the UN Security Council. Elsewhere, international negotiations on other issues, like climate and <a href="https://thebulletin.org/2022/03/in-striking-ukraine-russia-also-hit-nuclear-arms-control/#post-heading">nuclear arms control</a>, began to <a href="https://thebulletin.org/2022/03/russias-war-has-chilling-effect-on-climate-science-as-arctic-temperatures-soar/#post-heading">lose traction</a>.',
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
      caption: 'Burning vehicle in Luhansk Oblast (<a href="https://commons.wikimedia.org/wiki/File:Russian_invasion_of_Ukraine_in_Luhansk_Oblast,_March_2022_(01).jpg">Dsns.gov.ua</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons)',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>April 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span>",
      description:
'A Ukrainian counter-offensive began at the end of March amid <a href="https://thebulletin.org/2022/04/russia-committed-war-crimes-but-are-they-genocide/#post-heading">reports of Russian war crimes</a>. By the beginning of April, Russian troops had retreated from the areas around Kyiv and <a href="https://thebulletin.org/2022/04/russian-forces-leave-chernobyl-un-watchdog-offers-ukraine-more-help/#post-heading">Chernobyl</a>, shifting their focus to the Donetsk and Luhansk regions in the east. According to a <a href="https://thebulletin.org/2022/04/illia-ponomarenko-ukraines-most-followed-war-journalist-is-a-dude-from-donbas/#post-heading">Ukrainian journalist in the Donbas region</a>, “Russia has failed to demoralize and destabilize our society.”<br></br>Around the world, long term implications of the war began to emerge, as rising prices showed the need for <a href="https://thebulletin.org/2022/04/global-hunger-crisis-looms-as-war-in-ukraine-sends-food-prices-soaring/#post-heading">more resilient food systems</a>, Russia and China amplified <a href="https://thebulletin.org/2022/04/in-search-of-a-new-world-order-russia-and-china-team-up-to-push-ukraine-propaganda/#post-heading">disinformation campaigns</a>, and concerns around <a href="https://thebulletin.org/2022/04/will-putin-go-nuclear-a-timeline-of-expert-comments/#post-heading">nuclear escalation</a> grew.',
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
      caption: 'Consequences of the bombing of the children‘s hospital and maternity hospital in Mariupol (<a href="https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B0%D1%81%D0%BB%D1%96%D0%B4%D0%BA%D0%B8_%D0%BE%D0%B1%D1%81%D1%82%D1%80%D1%96%D0%BB%D1%83_%D0%B4%D0%B8%D1%82%D1%8F%D1%87%D0%BE%D1%97_%D0%BB%D1%96%D0%BA%D0%B0%D1%80%D0%BD%D1%96_%D1%82%D0%B0_%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B1%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D1%83_%D0%B2_%D0%9C%D0%B0%D1%80%D1%96%D1%83%D0%BF%D0%BE%D0%BB%D1%96,_9_%D0%B1%D0%B5%D1%80%D0%B5%D0%B7%D0%BD%D1%8F_2022_%D1%80%D0%BE%D0%BA%D1%83.jpg">armyinform.com.ua</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons)',
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>May 2022</b></span>",
      description:
'After weeks of fighting, Ukrainian soldiers in Mariupol surrendered to Russian forces as Sweden and Finland announced that they would join NATO. For Sweden, this ended two hundred years of neutrality.<br></br>In a show of unity, the European Commission announced a 220 billion EUR plan to shift away from Russian fossil fuels while President Biden agreed to send High Mobility Artillery Rocket Systems (HIMARS) with a 50-mile range to Ukraine.<br></br>Meanwhile, surveys across all 50 US states showed the <a href="https://thebulletin.org/2022/05/survey-americans-love-conspiracy-theories-and-thats-dangerous-for-everyone/#post-heading">effectiveness of misinformation</a> to muddy the waters on perceptions of Ukraine and Russia, with widespread uncertainty around false claims.',      location: {
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
'In the <a href="https://thebulletin.org/2022/06/has-the-russia-ukraine-war-blown-up-the-global-nuclear-order/#post-heading">leadup to the Non-Proliferation Treaty review conference</a>, the war in Ukraine strengthened calls for nuclear deterrence while also increasing interest in nuclear proliferation as a means of security. Meanwhile, Vladimir Putin compared himself to Peter the Great as Ukraine reclaimed Snake Island, where soldiers famously responded to a Russian warship’s warnings with “Russian warship, go fuck yourself” on February 24th. The ship itself sank back in April.<br></br>A US assistance package to Ukraine announced in April included Phoenix Ghost drones, which are  part of a “<a href="https://thebulletin.org/2022/06/phoenix-ghosts-are-part-drones-part-missiles-how-does-that-change-combat/#post-heading">global phenomenon</a>” of loitering munitions, raising questions around military strategy and management of drone proliferation.',
      location: {
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
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>July 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'In the east, Luhansk fell under Russian control, while the two countries agreed to allow international grain shipments from Ukraine through the Black Sea.<br></br>Russia continued to advance <a href="https://thebulletin.org/2022/07/russia-finds-another-stage-for-the-ukraine-biolabs-disinformation-show/#post-heading">debunked claims of illegal bioweapons labs</a>, this time through the Biological Weapons Convention. Reports showed that missiles had <a href="https://thebulletin.org/2022/07/ukraine-forges-ahead-with-nuclear-power/#post-heading">damaged buildings</a> at the Zaporizhzhia nuclear power plant.<br></br>Russia and Belarus announced a <a href="https://thebulletin.org/2022/07/russia-belarus-nuclear-sharing-would-mirror-natos-and-worsen-europe-security/#post-heading">plan to retrofit Belarussian planes</a> with Russian weapons and train the pilots in Russia. A Kremlin spokesperson clarified that the plan would not involve nuclear weapons but that the planes would be “technically capable” of carrying them. The only remaining nuclear nonproliferation agreement is <a href="https://thebulletin.org/2022/07/reviving-arms-control-post-ukraine-why-new-start-still-matters/#post-heading">New START,</a> which was extended an additional five years, but future negotiations seem grim.',
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
      title: "Grain exports resume",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%96%D1%8F.jpg",
      caption: 'T-150K tractor on the field. Kasova Hora, Ivano-Frankivsk Oblast, Ukraine (<a href="https://commons.wikimedia.org/wiki/File:%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%96%D1%8F.jpg">Vian</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons)',
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>August 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'Ukraine launched a counteroffensive in the Kherson region using Western-supplied weapons. Ukraine attacked a Russian airbase in Crimea and shelling around Zaporizhzhia continued, with both Ukraine and Russia pointing fingers.<br></br>A ship loaded with grain leaves Ukraine for the first time since the Russian blockade, but disruptions to the food supply already <a href="https://thebulletin.org/2022/08/how-climate-crises-and-global-conflict-combine-to-threaten-millions-in-the-horn-of-africa/#post-heading">risk famine in the Horn of Africa</a> and beyond.<br></br>European miscalculations around Russia’s reliability as a trade partner for Europe’s decarbonization efforts.',      location: {
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
      image: "https://thebulletin.org/wp-content/uploads/2023/02/52318947815_110dc6b13f_o.jpg",
      caption: "IAEA expert missison to Zaporizhzia (IAEA, Flickr)",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>September 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'The<a href="https://thebulletin.org/2022/09/iaea-arrives-at-the-zaporizhzhia-nuclear-power-plant-for-its-riskiest-mission-in-history/#post-heading"> UN’s nuclear watchdog, the </a><a href="https://thebulletin.org/2022/09/iaea-arrives-at-the-zaporizhzhia-nuclear-power-plant-for-its-riskiest-mission-in-history/#post-heading">IAEA, inspected the Zaporizhzhia nuclear power plant,</a> after which the IAEA Director General Rafael Mariano Grossi told journalists “It is obvious the physical integrity of the plant has been violated, several times. This is a reality that cannot continue to happen.” Nuclear experts <a href="https://thebulletin.org/2022/09/a-ukrainian-expert-assesses-the-possible-impact-of-a-military-attack-on-the-zaporizhzhia-nuclear-power-plant/#post-heading">weighed in</a> on the situation and <a href="https://thebulletin.org/2022/09/a-nuclear-safety-experts-view-on-the-crisis-at-the-zaporizhzhia-nuclear-power-plant/#post-heading">proposed urgent actions</a> to ensure the safety of the plant.<br></br>After Ukraine retook 1,000 square miles of territory from Russian forces, Vladimir Putin announced a partial mobilization of the military and made an <a href="https://thebulletin.org/2022/09/not-a-bluff-losing-ground-in-ukraine-putin-raises-nuclear-threats/#post-heading">indirect threat to use nuclear weapons</a>: “In the event of a threat to the territorial integrity of our country and to defend Russia and our people, we will certainly make use of all weapon systems available to us. This is not a bluff.”',
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
      title: "Kerch Strait Bridge attack",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D1%81%D1%82_%28%D0%A0%D0%BE%D1%81%D0%B0%D0%B2%D1%82%D0%BE%D0%B4%D0%BE%D1%80%29_5.jpg",
      caption: "Rosavtodor.ru, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>October 2022</b></span>",
      description:
'Ukraine orchestrated an attack on the Kerch Strait Bridge, which links Crimea to Russia. <a href="https://thebulletin.org/2022/10/water-as-weapon-and-casualty-in-russias-war-on-ukraine/#post-heading">Crimea’s water supply</a> has been an ongoing source of tension between Ukraine and Russia,  and <a href="https://thebulletin.org/2022/10/water-as-weapon-and-casualty-in-russias-war-on-ukraine/#post-heading">water has become a key weapon</a> and casualty during the conflict.<br></br>Russia announced the annexation of four Ukrainian regions: Luhansk, Donetsk, Kherson and Zaporizhzhia, where <a href="https://thebulletin.org/2022/10/zaporizhzhia-on-the-brink-how-deteriorating-conditions-at-the-nuclear-power-plant-could-lead-to-disaster/#post-heading">conditions at the nuclear power plant</a> continued to worsen and <a href="https://thebulletin.org/2022/10/russian-actions-at-zaporizhzhia-show-need-for-better-legal-protections-of-nuclear-installations/#post-heading">drew criticism</a> from the IAEA. Despite growing belief in the “<a href="https://thebulletin.org/2022/10/rhetoric-in-ukraine-has-reinforced-the-fallacy-of-limited-nuclear-exchange/#post-heading">fallacy of limited nuclear exchange</a>”, evidence shows that there is “<a href="https://thebulletin.org/2022/10/nowhere-to-hide-how-a-nuclear-war-would-kill-you-and-almost-everyone-else/">nowhere to hide</a>” from a nuclear war exchange.<br></br>Fears of a <a href="https://thebulletin.org/2022/10/winter-is-coming-europes-huge-geopolitical-blunder-on-russian-energy/#post-heading">harsh winter in Europe</a> worsened as energy prices continued to rise and the Russian<a href="https://thebulletin.org/2022/10/the-russian-biological-weapons-program-in-2022/"> disinformation campaign about an illegal </a><a href="https://thebulletin.org/2022/10/the-russian-biological-weapons-program-in-2022/">bioweapons program in Ukraine</a> continued.',      location: {
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
      image: "https://thebulletin.org/wp-content/uploads/2023/02/51987043055_6da9a80de3_o.jpg",
      caption: 'Bilateral meeting with Finland and Sweden (NATO, <a href="https://live.staticflickr.com/65535/51987043055_1ef4bdaf7a_k.jpg">Flickr</a>, CC BY-NC-ND 2.0)',
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>November 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'<a href="https://thebulletin.org/premium/2022-11/sanctioning-russias-oligarchs-with-shame/#post-heading">Significant sanctions</a> have been placed on Russia. Russian elites have spoken out against the war and, more than six months after the invasion, “nearly 1,000 Western firms [had closed] their offices in Russia.” The “stigmatizing” effect of the sanctions on multiple levels of Russian society could indicate Putin’s loosening grip on power. Since the invasion of Ukraine, an <a href="https://thebulletin.org/2022/11/war-puts-cleanup-of-russias-radioactive-wrecks-on-ice/#post-heading">ambitious international project</a> to remove Soviet-era nuclear garbage from the Arctic has fallen by the wayside.<br></br>Speaking with the <em>Bulletin</em>, <a href="https://thebulletin.org/premium/2022-11/its-a-different-kind-of-world-were-living-in-now-interview-with-political-scientist-francis-fukuyama/#post-heading">Francis Fukuyama said</a> that if the trend of Ukrainian success continued, “it’s entirely possible that the Ukrainians will be able to push them out of at least the south of Ukraine, and reopen their Black Sea coastline—which I think is very crucial to Ukraine’s survival as an independent nation.”',
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
      title: "Attacking inside Russia",
      image: "",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>December 2022</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'Ukraine attacked military bases hundreds of miles inside Russia. Russia claimed, without evidence, that Ukraine had been preparing to use a “<a href="https://thebulletin.org/2022/12/russias-dirty-bomb-disinformation-annotated/#post-heading">dirty bomb</a>” and blame it on Russia.',
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
      title: "90 seconds to midnight",
      image: "https://thebulletin.org/wp-content/uploads/2023/01/2023DoomsdayClockAnnouncementYT.png.webp",
      caption: "",
      website: "",
      author: "",
      legend:
        "<span style='font-size: 0.85em;'><em><b>January 2023</b></span><br><span style='color: #8c1f28;'><strong>Crimean peninsula, annexed in 2014</strong></span><br><span style='color: #d92525;'><strong>Territories captured by Russian forces</strong></span><br><span style='color: #138af2;'><strong>Territories liberated by Ukrainian forces</strong></span>",
      description:
'In January 2023, the Doomsday Clock moved forward to <a href="https://thebulletin.org/doomsday-clock/current-time/">90 seconds to midnight</a>: “This year, the Science and Security Board of the Bulletin of the Atomic Scientists moves the hands of the Doomsday Clock forward, largely (though not exclusively) because of the mounting dangers of the war in Ukraine. The Clock now stands at 90 seconds to midnight—the closest to global catastrophe it has ever been.”<br></br>Experts contemplated whether it was possible to <a href="https://thebulletin.org/2023/01/ending-the-war-while-ensuring-russia-does-not-gain-territory-via-nuclear-coercion/#post-heading">end the war</a> while ensuring that Russia does not gain territory.',
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
'“The Doomsday Clock is now 90 seconds to midnight, or total global catastrophe,” <a href="https://thebulletin.org/2023/02/un-secretary-general-the-doomsday-clock-is-a-global-alarm-clock/#post-heading">UN Secretary-General António Guterres noted</a> while addressing the United Nations General Assembly in New York. “This is the closest the clock has ever stood to humanity’s darkest hour—closer than even during the height of the Cold War.”<br></br>Roughly two weeks later, Russian President Vladimir Putin announced that “Moscow would <a href="https://thebulletin.org/2023/02/russia-suspends-new-start-and-is-ready-to-resume-nuclear-testing/#post-heading">suspend its participation in the New START</a> nuclear arms treaty, but not withdraw from it.” He added that Russia is ready to resume testing nuclear weapons if the United States does.<br></br>According to Jon Wolfsthal, senior advisor to Global Zero and a member of the Bulletin’s Science and Security Board, “Leaders in strong positions don’t seek to change the nature of the competition or divert from a winning strategy. Putin is trying to change the conversation because he is losing power, influence—and the war.”',
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
