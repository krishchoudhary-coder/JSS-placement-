import type { CompanyProfile } from "../types"

const list = (value: string) => value.split(";").map((item) => item.trim())

export const accenture: CompanyProfile = {
  id: "1",
  name: "Accenture plc",
  shortName: "Accenture",
  logoUrl:
    "https://www.accenture.com/_acnmedia/Accenture/Dev/RedesigNAcc_Logo_Black.svg",
  category: "Enterprise",
  companyType: "Dream",
  headquarters: "Dublin, Ireland",
  employeeSize: "740,000 employees",
  growth: 3,
  industry: "Professional Services",
  websiteUrl: "https://www.accenture.com",
  linkedinUrl: "https://www.linkedin.com/company/accenture",
  fields: {
    name: "Accenture plc",
    short_name: "Accenture",
    category: "Enterprise · Dream",
    incorporation_year: 1989,
    nature_of_company: "Public",
    overview_text:
      "Accenture is a global professional services company providing strategy, consulting, digital, technology, and operations services, serving large enterprises and governments across more than 120 countries with a strong focus on cloud, AI, and digital transformation.",
    vision_statement:
      "To drive continuous innovation and help the world's leading organizations build their digital core and achieve greater value.",
    mission_statement:
      "Deliver on the promise of technology and human ingenuity to create value and shared success for clients, people, shareholders, partners, and communities.",
    core_values: list(
      "Client value creation; Integrity; Respect for individuals; Innovation; Stewardship; Best people",
    ),
    history_timeline: list(
      "One of the largest employers of tech talent globally; Invests over $1B annually in R&D and innovation",
    ),
    ceo_name: "Julie Sweet",
    ceo_linkedin_url: "https://www.linkedin.com/in/juliesweet",
    key_leaders: list(
      "Julie Sweet, Chair & CEO; Manish Sharma, CEO; Jack Azagury, Group Chief Executive",
    ),
    board_members: list("Julie Sweet; David Rowland; Former global executives"),
    warm_intro_pathways: list(
      "Fortune 500 board connections; Alumni network; Technology partner ecosystems",
    ),
    decision_maker_access:
      "Low — large enterprise structure with formal procurement and partner-led access",
    annual_revenue: "$64.1B (FY2024)",
    annual_profit: "$7.2B net income (FY2024)",
    revenue_mix: "Consulting 55%; Managed Services 45%",
    valuation: "$220B market capitalization",
    profitability_status: "Profitable",
    key_investors: list("Vanguard Group; BlackRock; State Street"),
    recent_funding_rounds:
      "Public equity markets, ongoing institutional investment",
    total_capital_raised: "Public market funded",
    burn_rate: "Not Applicable, cash-flow positive",
    runway_months: "Not Applicable",
    burn_multiplier: "<1.0",
    headquarters_address: "Dublin, Ireland",
    operating_countries: list(
      "United States; United Kingdom; India; Germany; France; Japan; Australia; Canada; Brazil; Singapore",
    ),
    office_count: null,
    office_locations: list(
      "New York, United States; London, United Kingdom; Bangalore, India; Paris, France; Tokyo, Japan; Toronto, Canada; Sydney, Australia; Frankfurt, Germany",
    ),
    employee_size: "740,000 employees",
    offerings_description: list(
      "Management Consulting; Technology Services; Cloud Solutions; AI & Analytics; Cybersecurity; Business Process Outsourcing; Digital Engineering",
    ),
    focus_sectors: list(
      "Financials; Health Care; Consumer Discretionary; Industrials; Energy; Telecommunications; Public Sector; Technology",
    ),
    pain_points_addressed: list(
      "Digital transformation complexity; Legacy IT modernization; Cloud migration risk; Talent and skill gaps; Cybersecurity threats; Operational inefficiency",
    ),
    top_customers: list(
      "Fortune 500 Enterprises; Global Banks; Government Agencies; Healthcare Systems; Telecom Operators; Energy Majors",
    ),
    case_studies: list(
      "Microsoft cloud modernization; Unilever digital supply chain",
    ),
    product_pipeline: list("AI copilots; Industry SaaS accelerators"),
    tech_stack: list(
      "SAP; Salesforce; AWS; Microsoft Azure; ServiceNow; Kubernetes; Python",
    ),
    ai_ml_adoption_level:
      "High — generative AI platforms, AI-led consulting, and automation for delivery optimization",
    technology_partners: list(
      "Microsoft; SAP; Oracle; AWS; Google Cloud; Salesforce; NVIDIA",
    ),
    intellectual_property: list(
      "Accenture Labs IP; Industry AI frameworks; Proprietary cloud accelerators",
    ),
    r_and_d_investment: "$1.5B annually",
    cybersecurity_posture: list(
      "ISO 27001; SOC 2; Global cyber defense centers",
    ),
    tech_adoption_rating: "High — Industry Leader; top-tier among peers",
    innovation_roadmap: list(
      "GenAI platforms; Industry cloud solutions; Cyber resilience tools",
    ),
    partnership_ecosystem: list(
      "Microsoft; SAP; Oracle; Google; AWS; Salesforce",
    ),
    industry_associations: list(
      "World Economic Forum; NASSCOM; Business Roundtable",
    ),
    go_to_market_strategy: list(
      "Enterprise account teams; Strategic alliances; Thought leadership marketing",
    ),
    key_competitors: list(
      "IBM Consulting; Deloitte; TCS; Infosys; Capgemini; Cognizant; Wipro; PwC; EY",
    ),
    competitive_advantages: list(
      "Brand leadership; Scale and geographic reach; Deep enterprise relationships; Strong partner network",
    ),
    weaknesses_gaps: list(
      "High cost structure; Dependency on large enterprise spending cycles; Complex organizational structure",
    ),
    benchmark_vs_peers: list(
      "Higher revenue than Capgemini; Comparable margins to IBM Consulting; Stronger cloud alliances than TCS",
    ),
    market_share_percentage: "6–7% of global IT services market",
    tam: "$1.5T global IT and business services",
    sam: "$400B enterprise digital transformation",
    som: "7%",
    future_projections: "Revenue projected $70B by 2027",
    strategic_priorities: list(
      "Generative AI leadership; Cloud transformation; Sustainability consulting; Emerging markets growth",
    ),
    exit_strategy_history: "Mature public enterprise; Strategic acquisitions",
    core_value_proposition: list(
      "End-to-end transformation; Global delivery scale; Deep industry expertise; Strong technology partnerships; Innovation leadership",
    ),
    unique_differentiators: list(
      "Global delivery network; Industry-specific consulting; Strong alliance ecosystem; Proprietary AI and analytics platforms",
    ),
    esg_ratings: list(
      "Net-zero commitment by 2025; Science Based Targets; Diversity equity programs",
    ),
    carbon_footprint: "Actively reducing via renewable energy sourcing",
    ethical_sourcing: list("Supplier code of conduct; ESG audits"),
    sustainability_csr: list("Net-zero goals; Community programs"),
    work_culture_summary: list("Collaborative; Performance-driven"),
    manager_quality: "Strong coaching focus",
    psychological_safety: "High",
    feedback_culture: list("Continuous feedback; Annual reviews"),
    diversity_inclusion_score: list("Gender equity; Inclusive leadership"),
    ethical_standards: "High integrity; Compliance-driven",
    burnout_risk: "Moderate",
    layoff_history: "Periodic restructuring",
    mission_clarity: "High",
    crisis_behavior: "Transparent and compliance-driven",
    employee_turnover: "15% annually (industry benchmark estimate)",
    avg_retention_tenure: "4.5 years",
    diversity_metrics: "47% women workforce; Global DEI programs",
    recent_news: list(
      "2024 — Invested $3B in generative AI strategy; 2024 — Acquired multiple cloud and AI consulting firms in Europe",
    ),
    awards_recognitions: list(
      "Fortune Global 500; Great Place to Work Certified; Gartner Magic Quadrant Leader; Forbes Most Admired Companies",
    ),
    event_participation: list(
      "World Economic Forum; Microsoft Ignite; AWS re:Invent; Global Fintech Fest",
    ),
    sales_motion: "Enterprise Field Sales",
    customer_acquisition_cost: "$100K+ per enterprise",
    customer_lifetime_value: "$5M+",
    cac_ltv_ratio: "NA",
    churn_rate: "<3%",
    net_promoter_score: 60,
    customer_concentration_risk: "No, highly diversified client base",
    hiring_velocity: list(
      "Technology ~15,000 open roles; Consulting ~8,000 open roles; Operations ~6,000 open roles; Sales ~2,000 open roles",
    ),
    regulatory_status: list(
      "ISO 27001; SOC 2; GDPR Compliance; HIPAA Compliance",
    ),
    legal_issues:
      "Periodic labor and contract disputes; no major unresolved global litigation",
    supply_chain_dependencies: list(
      "Cloud providers; Software vendors; Talent workforce",
    ),
    geopolitical_risks: list(
      "Trade regulations; Data privacy laws; Regional conflicts",
    ),
    macro_risks: list("Global recession; Enterprise IT budget cuts"),
    remote_policy_details: "Hybrid, 60% flexible",
    typical_hours: "Flexible",
    overtime_expectations: "Occasional during project peaks",
    weekend_work: "Rare",
    flexibility_level: list("Remote; Hybrid"),
    location_centrality: "Central business districts",
    public_transport_access: list("Metro; Bus; Train"),
    cab_policy: list("Ride-hailing; Company transport"),
    airport_commute_time: "45 minutes",
    office_zone_type: "IT hub",
    area_safety: list("Secure; Well-monitored"),
    safety_policies: list("Late-night transport; Workplace safety"),
    infrastructure_safety: list("Fire compliant; Secure access"),
    emergency_preparedness: list("Medical support; Fire drills"),
    health_support: list("Health insurance; Mental wellness"),
    training_spend: "$1,500 per employee/year",
    onboarding_quality: "Industry-leading",
    learning_culture: list("Internal LMS; Certifications"),
    exposure_quality: "High",
    mentorship_availability: list("Leadership mentors; Peer mentors"),
    internal_mobility: "High",
    promotion_clarity: "Merit-based; Transparent",
    tools_access: list("Enterprise software; Cloud platforms"),
    role_clarity: "High",
    early_ownership: "Medium",
    work_impact: "Client-facing; Revenue-linked",
    execution_thinking_balance: "Balanced",
    automation_level: "High",
    cross_functional_exposure: list("Consulting; Technology; Sales"),
    skill_relevance: "Very High",
    global_exposure: list("Global clients; International teams"),
    network_strength: list("Global alumni network; Executive connections"),
    exit_opportunities: list(
      "Big Tech; Global consultancies; Industry leadership roles",
    ),
    brand_value: "Global top-tier brand",
    client_quality: list("Fortune 500; Governments"),
    external_recognition: "Strong global credibility",
    brand_sentiment_score:
      "Very Positive — strong global brand and high enterprise trust",
    social_media_followers: "15,000,000",
    fixed_vs_variable_pay: "Mostly fixed",
    bonus_predictability: "Moderate",
    esops_incentives: list("Stock grants; Performance shares"),
    family_health_insurance: list("Dependents covered; OPD"),
    relocation_support: list("Housing; Travel reimbursement"),
    lifestyle_benefits: list("Wellness programs; Meals; Fitness"),
    leave_policy: list("Paid leave; Mental health days"),
    website_url: "https://www.accenture.com",
    linkedin_url: "https://www.linkedin.com/company/accenture",
    twitter_handle: "@Accenture",
    facebook_url: "https://www.facebook.com/accenture",
    instagram_url: "https://www.instagram.com/accenture",
    marketing_video_url: "https://www.youtube.com/@Accenture",
    website_quality:
      "Enterprise-grade, high clarity, strong thought leadership, polished UX",
    website_rating: "NA",
    website_traffic_rank: "Global 12,000; US 4,000",
    glassdoor_rating: "4.1/5",
    indeed_rating: "4.2/5",
    google_rating: "4.3/5",
    customer_testimonials: list(
      "Unilever transformation story; Microsoft cloud case",
    ),
    primary_contact_email: "contact@accenture.com",
    primary_phone_number: "NA",
    contact_person_name: "Julie Sweet",
    contact_person_title: "CEO",
    contact_person_email: "prabhakar.d.phatak@accenture.com",
    contact_person_phone: "793 1578",
  },
}

export const seedCompanies: CompanyProfile[] = [accenture]
