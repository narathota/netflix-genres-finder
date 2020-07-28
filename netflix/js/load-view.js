// function displayGenresList() {
//     let $skillTypePost = $('<div>');
//     $skillTypePost.append(
//         $('<div>' +
//             '<div class="block-title ts-10">' +
//             '<h3 id="skillTypeH3"><span></span></h3>' +
//             '</div>' +
//             '<div class="skills-info skills-second-style" id="skillTypeSkillList">' +
//             '<div id="skillTypeSkillList"></div>' +
//             '</div>' +
//             '</div>'));
//
//     let $skillPost = $('<div>');
//     $skillPost.append(
//         $('<div class="clearfix">' +
//             '<h4 id="skillNameH5"></h4>' +
//             '<div class="skill-value" id="skillValueDiv"></div>' +
//             '</div>' +
//             '<div class="skill-container">' +
//             '<div class="skill-percentage " id="skillPercentageDiv"></div>' +
//             '</div>'));
//
//     let skillsList = [
//         {
//             'skillType': 'A',
//             'customSkills': [
//                 {
//                     'skill': 'Action & Adventure',
//                     'rating': 95,
//                 },
//                 {
//                     'skill': 'Business Solution Development',
//                     'rating': 90,
//                 },
//                 {
//                     'skill': 'Project Analysis and Planning',
//                     'rating': 80,
//                 },
//                 {
//                     'skill': 'Client Negotiation',
//                     'rating': 95,
//                 },
//                 {
//                     'skill': 'Team / Time Management',
//                     'rating': 75,
//                 },
//                 {
//                     'skill': 'Cost / Risk Control',
//                     'rating': 75,
//                 },
//             ],
//         },
//         {
//             'skillType': 'Technical Skills',
//             'customSkills': [
//                 {
//                     'skill': 'Angular (2-8+)',
//                     'rating': 90,
//                 },
//                 {
//                     'skill': 'Frontend Application Development',
//                     'rating': 85,
//                 },
//                 {
//                     'skill': 'JavaScript',
//                     'rating': 80,
//                 },
//                 {
//                     'skill': 'ReactJS',
//                     'rating': 70,
//                 },
//                 {
//                     'skill': 'Ionic',
//                     'rating': 75,
//                 },
//                 {
//                     'skill': 'HTML / CSS',
//                     'rating': 95,
//                 },
//                 {
//                     'skill': 'Java (Spring Boot)',
//                     'rating': 80,
//                 },
//                 {
//                     'skill': 'Python 3',
//                     'rating': 55,
//                 },
//                 {
//                     'skill': 'NodeJS',
//                     'rating': 50,
//                 },
//                 {
//                     'skill': 'MySQL',
//                     'rating': 75,
//                 },
//                 {
//                     'skill': 'Elasticsearch',
//                     'rating': 40,
//                 },
//             ],
//         },
//         {
//             'skillType': 'Soft Skills',
//             'customSkills': [
//                 {
//                     'skill': 'Presentation',
//                     'rating': 90,
//                 },
//                 {
//                     'skill': 'Product Demonstration',
//                     'rating': 85,
//                 },
//                 {
//                     'skill': 'Public Speaking',
//                     'rating': 90,
//                 },
//                 {
//                     'skill': 'Training and Mentoring',
//                     'rating': 75,
//                 },
//             ],
//         },
//     ];
//
//     for (let i = 0; i < skillsList.length; i++) {
//         let new_skill_type = $skillTypePost.clone(); // note the use of .clone()
//         new_skill_type.find('#skillTypeH3').text(skillsList[i].skillType);
//         new_skill_type.find('#skillTypeSkillList').attr('id', 'skillTypeSkillList' + i);
//         $('#genresContentDiv').append(new_skill_type);
//     }
//
//     for (let i = 0; i < skillsList.length; i++) {
//         for (let j = 0; j < skillsList[i].customSkills.length; j++) {
//             let new_skill = $skillPost.clone(); // note the use of .clone()
//             new_skill.find('#skillNameH5').text(skillsList[i].customSkills[j].skill);
//             new_skill.find('#skillValueDiv').text(skillsList[i].customSkills[j].rating);
//             new_skill.find('#skillPercentageDiv').addClass('skill-' + skillsList[i].customSkills[j].rating);
//             $('#skillTypeSkillList' + i).append(new_skill);
//         }
//     }
// }
//
// displayGenresList();
//
