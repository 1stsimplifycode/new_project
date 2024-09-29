function generateBusinessModel() {
    // Get input values
    const industry = document.getElementById('industry').value;
    const energy = document.getElementById('energy').value;
    const goals = document.getElementById('goals').value;
    const sdg = document.getElementById('sdg').value;

    // Basic validation to ensure fields are not empty and energy is a positive number
    if (industry === "" || energy === "" || goals === "" || sdg === "" || energy <= 0) {
        document.getElementById('output').innerHTML = "Please fill in all the fields with valid inputs.";
        return;
    }

    // Show loading spinner
    document.getElementById('output').innerHTML = `<div class="loader"></div> Generating business model...`;

    // Simulate a delay for loading
    setTimeout(() => {
        let businessModelSuggestion = "";
        let sustainabilityTips = [];
        let leadershipTips = []; // Array for leadership tips
        
        // Generate output based on selected SDG
        switch (sdg) {
            case "1":
                businessModelSuggestion = "Create job training programs for low-income communities to empower them economically.";
                sustainabilityTips = [
                    "Collaborate with local NGOs to provide resources for job training.",
                    "Offer internships to underprivileged youth.",
                    "Implement fair wage practices in your supply chain."
                ];
                leadershipTips = [
                    "Leaders should align job training with market needs and emphasize sustainable outcomes.",
                    "Review the sustainability impact of the programs.",
                    "Communicate the program's impact to stakeholders and the community."
                ];
                break;
            case "2":
                businessModelSuggestion = "Invest in local agriculture and food distribution networks to reduce food insecurity.";
                sustainabilityTips = [
                    "Partner with local farmers to source ingredients.",
                    "Create educational programs on nutrition and sustainable farming.",
                    "Reduce food waste through community food-sharing initiatives."
                ];
                leadershipTips = [
                    "Leaders should emphasize local agricultural partnerships as sustainable solutions.",
                    "Strengthen community-focused approaches to enhance social impact.",
                    "Promote sustainability as a core value in leadership messaging."
                ];
                break;
            case "3":
                businessModelSuggestion = "Develop health programs for employees and the community focused on prevention and wellness.";
                sustainabilityTips = [
                    "Offer free health check-ups and screenings.",
                    "Create wellness workshops on mental health.",
                    "Encourage physical activity through company-sponsored sports events."
                ];
                leadershipTips = [
                    "Leaders should integrate wellness into organizational goals to foster a healthier workforce.",
                    "Ensure leadership takes an active role in promoting employee wellbeing.",
                    "Promote health and wellness as part of long-term employee retention strategies."
                ];
                break;
            case "4":
                businessModelSuggestion = "Provide free or affordable educational resources to underserved communities.";
                sustainabilityTips = [
                    "Create online learning platforms for remote access.",
                    "Collaborate with schools to provide materials and technology.",
                    "Offer scholarships or mentorship programs."
                ];
                leadershipTips = [
                    "Leaders should promote education as a critical enabler of sustainable development.",
                    "Champion initiatives that bridge the digital divide in underserved communities.",
                    "Promote educational programs as part of the company’s long-term impact."
                ];
                break;
            case "5":
                businessModelSuggestion = "Implement policies that promote gender equality in the workplace.";
                sustainabilityTips = [
                    "Conduct training on unconscious bias for employees.",
                    "Establish a mentorship program for women in leadership.",
                    "Support flexible working arrangements for parents."
                ];
                leadershipTips = [
                    "Leaders should emphasize gender equality as a business driver.",
                    "Encourage diversity at every level of the organization.",
                    "Promote inclusive leadership through training and mentorship programs."
                ];
                break;
            case "6":
                businessModelSuggestion = "Develop clean water solutions for communities in need.";
                sustainabilityTips = [
                    "Partner with organizations that focus on clean water access.",
                    "Implement water conservation measures in your operations.",
                    "Educate the community on water usage and sanitation."
                ];
                leadershipTips = [
                    "Leaders should prioritize water access as a strategic sustainability goal.",
                    "Collaborate with local communities to address water shortages.",
                    "Promote water conservation practices across the organization."
                ];
                break;
            case "7":
                businessModelSuggestion = "Create energy-efficient products or services.";
                sustainabilityTips = [
                    "Conduct energy audits to identify areas for improvement.",
                    "Implement renewable energy solutions in your business.",
                    "Encourage employees to adopt energy-saving habits."
                ];
                leadershipTips = [
                    "Leaders should focus on energy efficiency as a core business strategy.",
                    "Promote the adoption of clean energy solutions across all departments.",
                    "Communicate the benefits of energy efficiency to shareholders and stakeholders."
                ];
                break;
            case "8":
                businessModelSuggestion = "Offer training programs for skills development in emerging markets.";
                sustainabilityTips = [
                    "Partner with local educational institutions.",
                    "Provide apprenticeships to enhance employability.",
                    "Promote fair labor practices in all operations."
                ];
                leadershipTips = [
                    "Leaders should align skills training with business growth objectives.",
                    "Promote fair labor practices as part of the company’s social impact strategy.",
                    "Ensure continuous feedback loops to measure program effectiveness."
                ];
                break;
            case "9":
                businessModelSuggestion = "Invest in innovative technologies to enhance sustainable production.";
                sustainabilityTips = [
                    "Adopt Industry 4.0 practices in your operations.",
                    "Collaborate with tech startups for sustainable solutions.",
                    "Provide training for employees on new technologies."
                ];
                leadershipTips = [
                    "Leaders should prioritize investment in cutting-edge technologies.",
                    "Communicate the value of innovation in driving sustainable growth.",
                    "Foster partnerships with tech startups for scalable, sustainable solutions."
                ];
                break;
            case "10":
                businessModelSuggestion = "Develop initiatives that promote equal opportunities for all.";
                sustainabilityTips = [
                    "Create programs targeting underrepresented groups in your workforce.",
                    "Conduct regular diversity audits.",
                    "Foster a culture of inclusivity within your organization."
                ];
                leadershipTips = [
                    "Leaders should champion diversity as a key business value.",
                    "Promote inclusivity through internal and external messaging.",
                    "Ensure equal opportunity policies are implemented at every level."
                ];
                break;
            case "11":
                businessModelSuggestion = "Implement sustainable practices in urban development projects.";
                sustainabilityTips = [
                    "Use eco-friendly materials in construction.",
                    "Incorporate green spaces in urban planning.",
                    "Promote public transport use among employees."
                ];
                leadershipTips = [
                    "Leaders should focus on integrating sustainability into urban development.",
                    "Champion eco-friendly initiatives in company operations.",
                    "Promote green spaces and transport solutions as strategic benefits."
                ];
                break;
            case "12":
                businessModelSuggestion = "Establish a zero-waste policy in your operations.";
                sustainabilityTips = [
                    "Reduce single-use plastics in your business.",
                    "Implement recycling programs for employees.",
                    "Educate consumers on responsible consumption."
                ];
                leadershipTips = [
                    "Leaders should prioritize zero-waste initiatives as key to long-term sustainability.",
                    "Encourage waste-reduction behaviors across the organization.",
                    "Collaborate with stakeholders to advance the company’s zero-waste goals."
                ];
                break;
            case "13":
                businessModelSuggestion = "Adopt climate resilience practices in your business operations.";
                sustainabilityTips = [
                    "Assess risks associated with climate change.",
                    "Implement mitigation strategies for potential impacts.",
                    "Engage with stakeholders on climate action initiatives."
                ];
                leadershipTips = [
                    "Leaders should position climate resilience as a strategic advantage.",
                    "Promote proactive climate action through corporate initiatives.",
                    "Communicate the value of climate resilience to long-term business stability."
                ];
                break;
            case "14":
                businessModelSuggestion = "Develop programs that protect marine biodiversity.";
                sustainabilityTips = [
                    "Support sustainable fishing practices.",
                    "Conduct awareness campaigns on ocean conservation.",
                    "Collaborate with marine conservation organizations."
                ];
                leadershipTips = [
                    "Leaders should focus on protecting marine resources as part of the company’s impact strategy.",
                    "Encourage stakeholders to adopt sustainable marine practices.",
                    "Promote marine biodiversity as a core sustainability goal."
                ];
                break;
            case "15":
                businessModelSuggestion = "Implement practices that protect terrestrial ecosystems.";
                sustainabilityTips = [
                    "Reduce deforestation by sourcing sustainable materials.",
                    "Participate in reforestation initiatives.",
                    "Educate employees on the importance of biodiversity."
                ];
                leadershipTips = [
                    "Leaders should prioritize the protection of terrestrial ecosystems.",
                    "Collaborate with organizations focused on reforestation.",
                    "Promote biodiversity as part of the company’s long-term sustainability strategy."
                ];
                break;
            case "16":
                businessModelSuggestion = "Promote transparency and accountability in your operations.";
                sustainabilityTips = [
                    "Implement ethical business practices.",
                    "Encourage employee feedback on company policies.",
                    "Engage with the community in governance discussions."
                ];
                leadershipTips = [
                    "Leaders should foster a culture of transparency within the organization.",
                    "Encourage ethical decision-making at all levels.",
                    "Promote accountability in leadership communications and policies."
                ];
                break;
            case "17":
                businessModelSuggestion = "Foster partnerships with local organizations to achieve shared sustainability goals.";
                sustainabilityTips = [
                    "Collaborate on community projects.",
                    "Share resources and knowledge with other organizations.",
                    "Participate in local sustainability forums."
                ];
                leadershipTips = [
                    "Leaders should champion these partnerships as strategic growth enablers.",
                    "Encourage employees to take ownership of sustainability initiatives.",
                    "Leaders can publicly align sustainability goals with company mission to drive value."
                ];
                break;
            default:
                businessModelSuggestion = "Please select a valid SDG goal.";
        }

        // Display output
        document.getElementById('output').innerHTML = `
            <h3>Your Suggested Business Model:</h3>
            <p>${businessModelSuggestion}</p>
            <h4>Sustainability Tips:</h4>
            <ul>${sustainabilityTips.map(tip => `<li>${tip}</li>`).join('')}</ul>
            <h4>Leadership Tips:</h4>
            <ul>${leadershipTips.map(tip => `<li>${tip}</li>`).join('')}</ul>
            <button onclick="downloadReport()">Download Report</button>
        `;

        // Generate chart
        generateChart(energy);

        // Show additional sections
        document.getElementById('successStories').style.display = 'block';
        document.getElementById('resources').style.display = 'block';
    }, 2000); // Simulate a 2-second delay for loading
}

// Function to generate a chart based on energy consumption
function generateChart(energy) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Energy Consumption (kWh)'],
            datasets: [{
                label: 'Annual Energy Consumption',
                data: [energy],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Show chart
    document.getElementById('myChart').style.display = 'block';
}

// Function to download the report
function downloadReport() {
    const outputContent = document.getElementById('output').innerText;
    const blob = new Blob([outputContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'sustainable_business_model_report.txt';
    link.click();
}

// Quiz functionality
function checkQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    
    if (q1 && q2) {
        let score = 0;
        if (q1.value === '2') score++;
        if (q2.value === '2') score++;
        
        alert(`You scored ${score} out of 2!`);
    } else {
        alert('Please answer all questions in the quiz.');
    }
}

// Show quiz section
document.getElementById('quizBtn').onclick = function() {
    document.getElementById('quizSection').style.display = 'block';
}
