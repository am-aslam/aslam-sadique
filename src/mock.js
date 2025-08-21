// Mock data for Data Scientist/AI/ML Engineer Portfolio

export const personalInfo = {
  name: "Aslam Sadique",
  title: "Data Scientist & AI/ML Engineer",
  tagline: "Transforming data into intelligent solutions",
  email: "aslamsadiquev@gmail.com",
  phone: "+91 8113841363",
  location: "Kozhikode, Kerala, India",
  linkedin: "https://linkedin.com/in/aslam-sadique",
  github: "https://github.com/am-aslam",
  website: "https://bitsandbrain.ai",
  bio: "Passionate Data Scientist and AI/ML Engineer with 1+ years of experience in developing intelligent systems and extracting insights from complex datasets. Specialized in deep learning, computer vision, and natural language processing with a proven track record of deploying production-scale ML models that drive business value."
};

export const skills = {
  programming: [
    { name: "Python", level: 95, years: 8 },
    { name: "R", level: 85, years: 6 },
    { name: "SQL", level: 90, years: 7 },
    { name: "JavaScript", level: 75, years: 4 },
    { name: "Java", level: 70, years: 3 },
    { name: "Scala", level: 65, years: 2 }
  ],
  mlFrameworks: [
    { name: "TensorFlow", level: 90, years: 5 },
    { name: "PyTorch", level: 85, years: 4 },
    { name: "Scikit-learn", level: 95, years: 7 },
    { name: "Keras", level: 88, years: 5 },
    { name: "XGBoost", level: 80, years: 4 },
    { name: "Hugging Face", level: 75, years: 3 }
  ],
  cloudPlatforms: [
    { name: "AWS", level: 85, years: 5 },
    { name: "MongoDBS", level: 80, years: 4 },
    // { name: "Azure", level: 70, years: 3 },
    // { name: "Docker", level: 82, years: 4 },
    // { name: "Kubernetes", level: 75, years: 3 }
  ],
  dataTools: [
    { name: "Apache Spark", level: 80, years: 4 },
    { name: "Hadoop", level: 70, years: 3 },
    { name: "Apache Kafka", level: 75, years: 3 },
    { name: "Elasticsearch", level: 70, years: 2 },
    { name: "MongoDB", level: 78, years: 4 }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Techolas Technologies Pvt Ltd",
    position: "Data Scientist",
    duration: "2025 - Present",
    location: "Kozhikode, Kerala",
    description: "data scientist in developing advanced ML models for predictive analytics. Built and deployed deep learning models that improved customer retention.",
    achievements: [
      "Developed computer vision models for autonomous quality inspection",
      "Built NLP pipeline processing 50M+ documents daily",
      "Led migration to cloud-native ML infrastructure on AWS",
      "Mentored 8 junior data scientists and ML engineers"
    ],
    technologies: ["Python", "TensorFlow", "GitHub", "GenAi", "MLflow"]
  },
  {
    id: 2,
    company: "Regalo Pack",
    position: "Digital Marketing Exicutive",
    duration: "2024 - 2025",
    location: "Coimbatore, Tamil Nadu",
    description: "Designed and implemented end-to-end ML pipelines for real-time recommendation systems serving 10M+ users. Specialized in deep learning and distributed computing architectures.",
    achievements: [
      "Built recommendation engine increasing user engagement by 34%",
      "Implemented real-time feature engineering pipeline",
      "Reduced model inference latency by 60%",
      "Published 3 research papers on distributed ML systems"
    ],
    technologies: ["SEO", "Instagram Adds", "Facebook Adds", "Web Development"]
  },
  // {
  //   id: 3,
  //   company: "Analytics Pro",
  //   position: "Data Scientist",
  //   duration: "2018 - 2020",
  //   location: "Austin, TX",
  //   description: "Developed predictive models for financial risk assessment and fraud detection. Created automated reporting systems and interactive dashboards for executive decision-making.",
  //   achievements: [
  //     "Built fraud detection model with 98.5% accuracy",
  //     "Created automated ML pipeline reducing manual work by 80%",
  //     "Developed interactive dashboards used by C-level executives",
  //     "Led cross-functional projects with 15+ stakeholders"
  //   ],
  //   technologies: ["R", "Python", "Tableau", "PostgreSQL", "Git"]
  // }
];

export const projects = [
  {
    id: 1,
    title: "Highscore Question Builder",
    category: "Machine Learning",
    description: "Advanced deep learning model that transfers artistic styles to images using convolutional neural networks. Features real-time processing and custom style training capabilities.",
    longDescription: "This project implements a state-of-the-art neural style transfer system using TensorFlow and custom CNN architectures. The engine can process images in real-time and allows users to train custom artistic styles. Deployed as a scalable web service handling 10,000+ requests daily.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1NTc4MTA4MHww&ixlib=rb-4.1.0&q=85",
    technologies: ["TensorFlow", "Python", "Pandas", "GitHub", "Gemini API"],
    metrics: {
      performance: "98.2% accuracy",
      scale: "10K+ daily requests",
      speed: "2.3s processing time"
    },
    links: {
      github: "https://github.com/am-aslam/highscore-question-builder",
      demo: "https://style-transfer.bitsandbrain.ai",
      paper: "#"
    },
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "AI Data Governance Copilot RAG LangChain Agents",
    category: "Time Series Analysis",
    description: "Machine learning system for cryptocurrency market prediction using ensemble methods and sentiment analysis from social media data.",
    longDescription: "Comprehensive trading algorithm that combines technical indicators, sentiment analysis from Twitter/Reddit, and news sentiment to predict cryptocurrency price movements. Uses ensemble methods including LSTM, GRU, and Transformer models.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NTU3ODEwODZ8MA&ixlib=rb-4.1.0&q=85",
    technologies: ["PyTorch", "Pandas", "scikit-learn", "MongoDB", "FastAPI"],
    metrics: {
      performance: "76.8% prediction accuracy",
      scale: "500+ assets tracked",
      speed: "Real-time predictions"
    },
    links: {
      github: "https://github.com/am-aslam/AI-Data-Governance-Copilot-RAG-LangChain-Agents-",
      demo: "#"
    },
    featured: true,
    date: "2024"
  },
  {
    id: 3,
    title: "RNA Ligand Sample Regression Model",
    category: "Healthcare AI",
    description: "A regression model to predict RNA-ligand binding affinity using molecular descriptors. Includes data processing, model training (e.g., Random Forest, XGBoost), and evaluation. Useful for RNA-targeted drug discovery and ligand screening. Built with Python, RDKit, and scikit-learn.",
    longDescription: "Advanced computer vision system for medical imaging that assists radiologists in tumor detection and segmentation. Built using custom U-Net architecture with attention mechanisms and trained on 50,000+ medical images from multiple hospitals.",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1NTc4MTA4MHww&ixlib=rb-4.1.0&q=85",
    technologies: ["TensorFlow", "OpenCV", "DICOM", "Docker", "GCP","image Recognition"],
    metrics: {
      performance: "94.7% sensitivity",
      scale: "50K+ images processed",
      speed: "30s per scan"
    },
    links: {
      github: "https://github.com/am-aslam/RNA_Ligand_Sample_Regression_Model",
      paper: "#"
    },
    featured: true,
    date: "2023"
  },
  {
    id: 4,
    title: "JobHunting Mail Automated System",
    category: "NLP",
    description: "AI-powered system that converts natural language queries into SQL commands for business intelligence dashboards.",
    longDescription: "Enterprise-grade NLP system that allows business users to query databases using natural language. Built using transformer models and supports complex multi-table joins, aggregations, and filtering operations.",
    image: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NTU3ODEwODZ8MA&ixlib=rb-4.1.0&q=85",
    technologies: ["Hugging Face", "PostgreSQL", "React", "FastAPI", "Redis"],
    metrics: {
      performance: "89.5% query accuracy",
      scale: "1M+ queries processed",
      speed: "1.2s response time"
    },
    links: {
      github: "https://github.com/am-aslam/JobHunting_MailAutomated_System",
      demo: "https://query-engine.bitsandbrain.ai"
    },
    featured: false,
    date: "2023"
  },
  {
    id: 5,
    title: "Distributed ML Pipeline",
    category: "MLOps",
    description: "Scalable machine learning pipeline for batch processing using Apache Spark and Kubernetes orchestration.",
    longDescription: "Production-ready MLOps pipeline that handles data preprocessing, feature engineering, model training, and deployment at scale. Supports A/B testing, model versioning, and automated retraining based on performance metrics.",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NTU3ODEwODZ8MA&ixlib=rb-4.1.0&q=85",
    technologies: ["Apache Spark", "Kubernetes", "MLflow", "Apache Airflow", "Prometheus"],
    metrics: {
      performance: "99.9% uptime",
      scale: "10TB+ data daily",
      speed: "4hr processing time"
    },
    links: {
      github: "https://github.com/alexchen/distributed-ml-pipeline"
    },
    featured: false,
    date: "2023"
  }
];

export const publications = [
  {
    id: 1,
    title: "Attention-Based Neural Networks for Medical Image Segmentation",
    journal: "Nature Machine Intelligence",
    year: "2024",
    authors: ["A. Chen", "M. Rodriguez", "S. Kim"],
    doi: "10.1038/s42256-024-00789-1",
    citations: 89,
    abstract: "We present a novel attention mechanism for medical image segmentation that improves tumor detection accuracy by 12% over traditional U-Net architectures.",
    pdf: "https://nature.com/articles/s42256-024-00789-1.pdf",
    featured: true
  },
  {
    id: 2,
    title: "Distributed Training Strategies for Large-Scale Transformer Models",
    journal: "ICML 2024 Proceedings",
    year: "2024",
    authors: ["A. Chen", "L. Wang", "R. Patel"],
    doi: "10.48550/arXiv.2024.03456",
    citations: 156,
    abstract: "This work explores efficient distributed training techniques for transformer models with 100B+ parameters, achieving 40% reduction in training time.",
    pdf: "https://arxiv.org/pdf/2024.03456.pdf",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Anomaly Detection in IoT Sensor Networks",
    journal: "IEEE Transactions on Neural Networks",
    year: "2023",
    authors: ["A. Chen", "J. Thompson"],
    doi: "10.1109/TNNLS.2023.3245678",
    citations: 234,
    abstract: "A lightweight deep learning approach for detecting anomalies in IoT sensor data with sub-millisecond inference time.",
    pdf: "https://ieeexplore.ieee.org/document/10045678",
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-ML-2024-789456",
    image: "/images/gcp-ml-cert.png"
  },
  {
    id: 2,
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-MLS-2023-123456",
    image: "/images/aws-ml-cert.png"
  },
  {
    id: 3,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "TF-DEV-2023-654321",
    image: "/images/tf-cert.png"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "VP of Engineering",
    company: "TechCorp AI",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c5eb?w=150&h=150&fit=crop&crop=face",
    testimonial: "Alex is an exceptional data scientist who consistently delivers innovative solutions. His work on our recommendation system increased user engagement by 34% and his technical leadership has been invaluable to our team.",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    position: "Research Director",
    company: "AI Research Institute",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    testimonial: "Working with Alex on the medical imaging project was fantastic. His deep understanding of both the technical challenges and practical applications resulted in a system that's now being used in 5 hospitals.",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    name: "Lisa Wang",
    position: "CTO",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    testimonial: "Alex's expertise in machine learning and his ability to translate complex algorithms into production systems is outstanding. He delivered our ML pipeline ahead of schedule and under budget.",
    rating: 5,
    featured: false
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of Explainable AI in Healthcare",
    excerpt: "Exploring how interpretable machine learning models are revolutionizing medical diagnosis and treatment recommendations.",
    content: "Full blog post content would go here...",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI", "Healthcare", "XAI", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1NTc4MTA4MHww&ixlib=rb-4.1.0&q=85",
    featured: true,
    views: 2456
  },
  {
    id: 2,
    title: "Scaling Transformer Models: Lessons from Production",
    excerpt: "Key insights and practical tips for deploying large language models in production environments.",
    content: "Full blog post content would go here...",
    publishDate: "2024-01-02",
    readTime: "12 min read",
    tags: ["Transformers", "MLOps", "Production", "LLM"],
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NTU3ODEwODZ8MA&ixlib=rb-4.1.0&q=85",
    featured: true,
    views: 3821
  },
  {
    id: 3,
    title: "Building Robust Data Pipelines with Apache Kafka",
    excerpt: "A comprehensive guide to designing fault-tolerant data streaming architectures for machine learning applications.",
    content: "Full blog post content would go here...",
    publishDate: "2023-12-18",
    readTime: "10 min read",
    tags: ["Data Engineering", "Kafka", "Streaming", "Architecture"],
    image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzU1NzgxMDkxfDA&ixlib=rb-4.1.0&q=85",
    featured: false,
    views: 1687
  }
];

export const stats = {
  yearsExperience: 1,
  projectsCompleted: 20,
  modelsDeployed: 5,
  papersPublished: 3,
  citationsReceived: 12,
  teamsLed: 1
};