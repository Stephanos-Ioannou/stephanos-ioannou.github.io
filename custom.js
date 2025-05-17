// Language translations
const translations = {
  nl: {
    jobTitle: "Junior Software Developer",
    tagline: "Software bouwen die echte problemen oplost vanuit Rotterdam, Nederland.",
    aboutTitle: "Over Mij",
    aboutText1: "Software is altijd een natuurlijke interesse van mij geweest. Ik denk nog steeds met plezier terug aan de eerste keer dat ik echt betrokken raakte bij coderen tijdens de middelbare school, toen ik de opdracht kreeg om een 2D-platformspel te maken. Ik werkte er lang na schooltijd aan, genietend van de creatieve vrijheid die het me gaf.",
    aboutText2: "Mijn Bachelor in Informatica gaf me een solide basis in C# en introduceerde me in onderwerpen zoals databases, webontwikkeling, softwareontwerp en beveiliging. Ik leidde meerdere zesmaandelijkse projecten, vaak in de rol van Scrum Master of projectleider.",
    aboutText3: "Naast programmeren geniet ik van pianospelen bij lokale jamsessies en actief blijven in de sportschool.",
    experienceTitle: "Mijn Ervaring",
    gradIntern: "Afstudeer Stagiair · Nextue",
    gradInternText: "Voor mijn afstudeerproject bij Nextue bouw ik een volledig geïntegreerd Salesforce en Microsoft 365 automatiseringssysteem. De oplossing synchroniseert Outlook en SharePoint mappen met behulp van Microsoft Graph API en Azure PowerShell, gecoördineerd via Apex en Lightning Web Components (LWC). Ik heb achtergrondlogica ontworpen om gebruikersrechten en mapstructuren consistent te houden tussen systemen, met als doel zowel schaalbaarheid als onderhoudbaarheid voor toekomstige gebruikers te verbeteren.",
    juniorDev: "Junior Software Developer · Nextue",
    juniorDevText: "Verder ontwikkeld aan een op maat gemaakte Salesforce-applicatie voor een verzekeringsmaatschappij, met toevoeging en aanpassing van functies naar wens van de klant. Succesvol verschillende functies geïntegreerd om aan de specifieke behoeften van de verzekeringssector te voldoen, waardoor de gebruikerservaring werd verbeterd.",
    fullstack: "Full Stack Stage · Lizard Global",
    fullstackText: "Functies ontwikkeld voor personeelsbeheerapplicatie Aposto en de persoonlijke website van Lizard Global binnen een agile omgeving met JavaScript en React. Succesvol de persoonlijke website van Lizard geherintegreerd met hun verkoopapplicatie om het verkoopproces te stroomlijnen. Een adviesrapport geschreven over het behouden van dataconsistentie voor Aposto's migratie van Firebase naar een microservice-architectuur.",
    peercoach: "Peercoach · Hogeschool Rotterdam",
    peercoachText: "Eerstejaars studenten geholpen bij hun studie tijdens mijn tweede jaar in de Informatica opleiding. Extra presentaties gegeven om complexe onderwerpen uit te leggen. Nauw samengewerkt met docenten om studenten te ondersteunen bij hun academische succes.",
    techTitle: "Mijn Tech Stack",
    techPro: "Gebruikt in Professionele Projecten",
    techUni: "Geleerd Tijdens Universiteit",
    techPersonal: "Persoonlijk Verkend",
    contactTitle: "Neem Contact Op",
    contactText: "Ik sta momenteel open voor nieuwe kansen en zou graag bespreken hoe ik kan bijdragen aan uw team.",
    viewCV: "CV Bekijken",
    signature: "– Stephanos"
  },
  en: {
    jobTitle: "Junior Software Developer",
    tagline: "Building software that solves real-world problems from Rotterdam, the Netherlands.",
    aboutTitle: "About Me",
    aboutText1: "Software has been a natural interest of mine for as long as I can remember. I still think fondly of the first time I got truly invested in coding during high school, when I was tasked with creating a 2D platformer. I ended up working on it long after school hours, enjoying the creative freedom it gave me.",
    aboutText2: "My Bachelor's in Informatica gave me a solid foundation in C# and introduced me to topics like databases, web development, software design, and security. I led multiple six-month projects, often taking the role of Scrum Master or project lead.",
    aboutText3: "Outside of programming, I enjoy playing piano at local jam sessions and staying active at the gym.",
    experienceTitle: "My Experience",
    gradIntern: "Graduation Intern · Nextue",
    gradInternText: "For my graduation project at Nextue, I'm building a fully integrated Salesforce and Microsoft 365 automation system. The solution synchronizes Outlook and SharePoint folders using Microsoft Graph API and Azure PowerShell, coordinated via Apex and Lightning Web Components (LWC). I designed background logic to keep user permissions and folder structures consistent across systems, aiming to improve both scalability and maintainability for future users.",
    juniorDev: "Junior Software Developer · Nextue",
    juniorDevText: "Further developed a tailored Salesforce application for an insurance company, adding and changing features to the client's wish. Successfully integrated various features to meet the specific needs of the insurance sector, improving user experience.",
    fullstack: "Full Stack Internship · Lizard Global",
    fullstackText: "Developed features for staff management application Aposto and Lizard Global's personal website within an agile environment using JavaScript and React. Successfully reintegrated Lizard's personal website with their sales application to streamline the sales process. Wrote an advisory report on maintaining data consistency for Aposto's migration from Firebase to a microservice architecture.",
    peercoach: "Peercoach · Hogeschool Rotterdam",
    peercoachText: "Assisted first-year students in their studies during my second year in the Computer Science program. Provided extra presentations to explain complex topics. Worked closely with professors to support students in their academic success.",
    techTitle: "My Tech Stack",
    techPro: "Used in Professional Projects",
    techUni: "Learned During University",
    techPersonal: "Explored Personally",
    contactTitle: "Contact Me",
    contactText: "I'm currently open to new opportunities and would love to discuss how I can contribute to your team.",
    viewCV: "View CV",
    signature: "– Stephanos"
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Configure animation targets with more efficient selectors
  const animationTargets = document.querySelectorAll('.section-title, .experience-card, .about-content, .tech-group, .contact-section p, .social-buttons, .cv-button-container');
  
  // Simplified sequential animation setup
  const applyAnimationOrder = (selector, startIndex = 0) => {
    document.querySelectorAll(selector).forEach((el, i) => 
      el.style.setProperty('--animation-order', startIndex + i)
    );
  };
  
  // Apply animation order to different element groups
  applyAnimationOrder('.experience-card');
  applyAnimationOrder('.tech-group');
  applyAnimationOrder('.contact-section p, .social-buttons, .cv-button-container');

  // Optimized intersection observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-10px 0px', threshold: 0.1 });
  
  // Observe all elements that need animation
  animationTargets.forEach(element => observer.observe(element));
  
  // Language switching functionality
  const setupLanguageSwitcher = () => {
    const languageToggle = document.getElementById('languageToggle');
    const currentLangElement = languageToggle.querySelector('.current-lang');
    const targetLangElement = languageToggle.querySelector('.target-lang');
    const htmlTag = document.documentElement;
    
    // More concise translatable elements definition
    const translatableElements = [
      { selector: 'h2:not(.section-title)', key: 'jobTitle' },
      { selector: '.text-section h3', key: 'tagline' },
      { selector: '.about-section .section-title', key: 'aboutTitle' },
      { selector: '.about-text p:nth-child(1)', key: 'aboutText1' },
      { selector: '.about-text p:nth-child(2)', key: 'aboutText2' },
      { selector: '.about-text p:nth-child(3)', key: 'aboutText3' },
      { selector: '.about-text p:nth-child(4) em', key: 'signature' },
      { selector: '.experience-section .section-title', key: 'experienceTitle' },
      { selector: '.experience-card:nth-child(2) .experience-header h3', key: 'gradIntern' },
      { selector: '.experience-card:nth-child(2) p', key: 'gradInternText' },
      { selector: '.experience-card:nth-child(3) .experience-header h3', key: 'juniorDev' },
      { selector: '.experience-card:nth-child(3) p', key: 'juniorDevText' },
      { selector: '.experience-card:nth-child(4) .experience-header h3', key: 'fullstack' },
      { selector: '.experience-card:nth-child(4) p', key: 'fullstackText' },
      { selector: '.experience-card:nth-child(5) .experience-header h3', key: 'peercoach' },
      { selector: '.experience-card:nth-child(5) p', key: 'peercoachText' },
      { selector: '.section-common .section-title', key: 'techTitle' },
      { selector: '.tech-group:nth-child(2) h3', key: 'techPro' },
      { selector: '.tech-group:nth-child(3) h3', key: 'techUni' },
      { selector: '.tech-group:nth-child(4) h3', key: 'techPersonal' },
      { selector: '.contact-section .section-title', key: 'contactTitle' },
      { selector: '.contact-section p', key: 'contactText' },
      { selector: '.cv-button span', key: 'viewCV' }
    ];
    
    // Function to apply translations
    function applyTranslations(lang) {
      htmlTag.setAttribute('lang', lang);
      
      // Process all translatable elements
      translatableElements.forEach(el => {
        document.querySelectorAll(el.selector).forEach(element => {
          element.textContent = translations[lang][el.key];
        });
      });
      
      // Update language button icons with flag images
      if (lang === 'nl') {
        currentLangElement.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@3.5.0/flags/4x3/nl.svg" alt="NL Flag" width="24" height="18">';
        targetLangElement.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@3.5.0/flags/4x3/gb.svg" alt="EN Flag" width="24" height="18">';
      } else {
        currentLangElement.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@3.5.0/flags/4x3/gb.svg" alt="EN Flag" width="24" height="18">';
        targetLangElement.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@3.5.0/flags/4x3/nl.svg" alt="NL Flag" width="24" height="18">';
      }
      
      localStorage.setItem('language', lang);
    }
    
    // Initialize with saved language
    const savedLang = localStorage.getItem('language') || 'nl';
    applyTranslations(savedLang);
    
    // Toggle language on click - using arrow function for cleaner syntax
    languageToggle.addEventListener('click', () => {
      const newLang = htmlTag.getAttribute('lang') === 'nl' ? 'en' : 'nl';
      applyTranslations(newLang);
    });
  };
  
  setupLanguageSwitcher();
});

