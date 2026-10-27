export const projects = [
  {
    id: "indonesian-llm-pgabl",
    title: "Indonesian Generative AI & Advanced RAG (LLM)",
    categories: ["ai-ml"],
    featured: false,
    summary:
      "End-to-end Indonesian LLM implementation featuring SFT via QLoRA, RL via GRPO, and an Advanced RAG pipeline for the legal domain.",
    problem:
      "Developing a specialized Indonesian LLM capable of complex reasoning and retrieving precise information from extensive legal documents.",
    approach:
      "Fine-tuned Qwen2.5-3B using 4-bit QLoRA and applied GRPO with multi-reward functions to stimulate chain-of-thought reasoning. Built a RAG pipeline utilizing Hierarchical Chunking, HyDE, and Hybrid Retrieval (Dense BGE-M3 + Sparse BM25).",
    results:
      "Achieved a validation loss of 0.9378 during SFT and a GRPO loss of 0.0009. Successfully retrieved contexts from 1,949 pages of regulations with automated citations and a Gradio web interface.",
    limitations:
      "Inference requires sufficient VRAM for the 3B parameter model, and the RAG pipeline is domain-specific to Indonesian labor laws and business licensing.",
    role: "Solo Project — fine-tuning, reinforcement learning, RAG architecture, and UI integration.",
    tech: ["Python", "PyTorch", "Hugging Face", "Unsloth", "LangChain", "FAISS"],
    image: "/images/llm-pgabl.webp",
    links: { github: "https://github.com/JayJung666/pengembangan-generative-ai-berbasis-llm", demo: "", paper: "" },
  },
  {
    id: "garbage-classification",
    title: "Garbage Image Classification (EfficientNetB1)",
    categories: ["ai-ml"],
    featured: false,
    summary:
      "Deep learning image classification model utilizing Transfer Learning with EfficientNetB1 to categorize 10 types of garbage.",
    problem:
      "Automating waste sorting requires highly accurate image recognition models that can reliably operate on edge devices.",
    approach:
      "Implemented Two-Stage Training (Feature Extraction & Fine-Tuning) on a pretrained EfficientNetB1 architecture, incorporating custom Convolutional top blocks and label smoothing.",
    results:
      "Achieved 99.99% training accuracy and 95.68% test accuracy. Exported the model to TensorFlow Lite and TFJS for portable deployments.",
    limitations:
      "Model performance heavily depends on lighting conditions, and the dataset is currently limited to 10 specific garbage categories.",
    role: "Solo Project — model architecture, data augmentation, two-stage training, and deployment formatting.",
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning", "EfficientNet"],
    image: "/images/garbage-class.webp",
    links: { github: "https://github.com/JayJung666/garbage-image-classification", demo: "", paper: "" },
  },
  {
    id: "financial-transaction-ml",
    title: "Financial Transaction Pattern Analysis",
    categories: ["ai-ml"],
    featured: false,
    summary:
      "Customer segmentation and classification system analyzing banking transactions using unsupervised and supervised machine learning techniques.",
    problem:
      "Banks need to effectively profile customers based on their financial behaviors and transaction patterns to target services accurately.",
    approach:
      "Applied K-Means clustering (k=2) and PCA for segmentation. Transformed the clustered data to build a classification model using a GridSearchCV-tuned Random Forest.",
    results:
      "Identified 'Conservative' and 'Transactive' customer clusters with an optimal silhouette score of 0.572. The tuned Random Forest model achieved 100% accuracy and 1.00 F1-Score.",
    limitations:
      "The perfect accuracy metric suggests potential dataset simplicity or synthetic nature, requiring validation on real-world noisy transaction data.",
    role: "Solo Project — data preprocessing, clustering, feature engineering, and predictive modeling.",
    tech: ["Python", "Scikit-Learn", "Pandas", "K-Means", "Random Forest"],
    image: "/images/financial-ml.webp",
    links: { github: "https://github.com/JayJung666/belajar-machine-learning-pemula", demo: "", paper: "" },
  },
  {
    id: "disneyplus-sentiment",
    title: "Disney+ Hotstar Sentiment Analysis",
    categories: ["ai-ml"],
    featured: false,
    summary:
      "End-to-End NLP pipeline analyzing 30,000 app reviews using a Bidirectional LSTM network with Dual Pooling Attention.",
    problem:
      "Understanding user satisfaction from massive volumes of unstructured app reviews requires automated and scalable textual analysis.",
    approach:
      "Scraped Google Play reviews, applied Lexicon-Based labeling, and trained a BiLSTM architecture against Logistic Regression and LinearSVC baselines.",
    results:
      "The BiLSTM model outperformed classical ML algorithms, achieving the highest accuracy of 93.23% and a 0.91 Macro F1-Score.",
    limitations:
      "The model may struggle with complex sarcasm, mixed-language reviews, or highly localized slang not captured during training.",
    role: "Solo Project — data scraping, NLP preprocessing, model training, and evaluation.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "NLTK", "Sastrawi"],
    image: "/images/sentiment.webp",
    links: { github: "https://github.com/JayJung666/analisis-sentimen-disneyplus", demo: "", paper: "" },
  },
  {
    id: "ai-knowledge-base",
    title: "RAG-Based AI Knowledge Base",
    categories: ["ai-ml", "web"],
    featured: false,
    summary:
      "Production-ready Retrieval-Augmented Generation (RAG) system with a FastAPI backend and React frontend, fully containerized via Docker.",
    problem:
      "Querying internal documents securely and efficiently requires a scalable local RAG architecture without heavy resource consumption.",
    approach:
      "Integrated FastEmbed (ONNX) and ChromaDB for vector retrieval. Connected to Groq LLM for inference and optimized the Docker image by removing heavy dependencies.",
    results:
      "Successfully deployed live on Vercel and Render with a minimal ~200MB backend Docker image footprint and high-speed retrieval capabilities.",
    limitations:
      "Relies on the external Groq API for LLM inference; complete offline operation requires local LLM hardware integration.",
    role: "Solo Project — RAG pipeline engineering, containerization, and API development.",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Docker", "React"],
    image: "/images/rag.webp",
    links: { github: "https://github.com/JayJung666/ai-knowledge-base", demo: "https://ai-knowledge-base-gamma-one.vercel.app/", paper: "" },
  },
  {
    id: "pushup-posture-icodsa",
    title: "Push-Up Posture Quality Classification (IEEE ICoDSA 2026)",
    categories: ["ai-ml"],
    featured: false,
    summary:
      "Automated evaluation system for push-up posture quality utilizing joint angle kinematics and sequential deep learning architectures on a 315-sample dataset.",
    problem:
      "Current posture classification models suffer from spatial coordinate bias, camera scale distortion, and data leakage from random sliding windows.",
    approach:
      "Extracted 4 joint angles via arctan2 using MediaPipe PoseLandmarker to ensure scale-invariance. Trained a lightweight 16-unit LSTM network and evaluated using a Group 4-Fold Cross-Validation scheme to prevent cross-subject data leakage.",
    results:
      "Achieved 86.12% mean accuracy and 85.79% F1-score, demonstrating superior cross-subject stability compared to GRU and SVM baseline models.",
    limitations:
      "Evaluated on a limited dataset of 8 subjects; requires expansion to diverse demographics and multi-class mistake categorization.",
    role: "Lead Researcher — experiment design, model architecture, training pipeline, and thesis/paper authorship.",
    tech: ["Python", "TensorFlow/Keras", "MediaPipe", "NumPy", "Pandas"],
    image: "/images/pushup.webp",
    links: { github: "https://github.com/JayJung666/push-up-posture-classification", demo: "", paper: "" },
  },
  {
    id: "scanora-ai",
    title: "SCANORA: AI-Powered Fruit Freshness App",
    categories: ["ai-ml", "web"],
    featured: false,
    summary:
      "Mobile-first web application to detect fruit freshness and manage inventory, built with React, Node.js, PostgreSQL, and a FastAPI AI backend.",
    problem:
      "Manual sorting of fruits is inefficient and subjective, leading to inconsistent quality control and increased food waste.",
    approach:
      "Developed a custom training loop with an EfficientNetV2-B0 backbone, Spatial Attention Layer, and Focal Loss. Deployed the multi-output model (product and condition heads) via FastAPI.",
    results:
      "Achieved 98.61% product accuracy and 98.27% condition accuracy (Test Loss: 0.0083), far exceeding the 85% baseline target. Successfully integrated with the Express/Node.js backend.",
    limitations:
      "Classification is currently optimized for three specific fruit types and requires controlled lighting for optimal accuracy.",
    role: "AI Engineer — computer vision model development, custom training loops, and FastAPI inference deployment.",
    tech: ["Python", "FastAPI", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    image: "/images/scanora.webp",
    links: { github: "https://github.com/JayJung666/AI-Engineer_Scanora", demo: "https://scanora-v1.vercel.app/", paper: "" },
  },
  {
    id: "kp-brmp-ecommerce",
    title: "E-Commerce Seed Sales Web Application (BRMP-TAS)",
    categories: ["web"],
    featured: false,
    summary:
      "Full-stack e-commerce web platform developed for the Ministry of Agriculture to digitize manual seed transactions.",
    problem:
      "Seed sales were handled manually via WhatsApp, causing unstructured transaction records and difficulties in tracking stock and distribution.",
    approach:
      "Built a Laravel backend with MySQL and a Blade frontend. Implemented Task Scheduling for auto-cancellations, custom Middlewares, and an interactive distribution map.",
    results:
      "Successfully digitized the workflow, completing UAT with the agency. Enabled systematic tracking, responsive mobile access, and automated stock management.",
    limitations:
      "Automated payment gateway is not yet integrated due to agency banking policies, relying on manual receipt verification.",
    role: "Full Stack Developer Intern — backend architecture, API design, frontend UI implementation, and system testing.",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript"],
    image: "/images/ecommerce.webp",
    links: { github: "", demo: "https://seratmanis.id/upbs-stok/", paper: "" },
  },
  {
    id: "catch-u-dating",
    title: "Catch-U Dating Application",
    categories: ["mobile"],
    featured: false,
    summary:
      "Cross-platform dating application featuring a smart matching algorithm, GPS location services, and AI face validation.",
    problem:
      "Users need a secure and efficient platform to find partners, necessitating robust location tracking and identity verification to prevent fake accounts.",
    approach:
      "Developed mobile interfaces in Flutter and Dart, backed by Firebase. Integrated an AI face validation system.",
    results:
      "Delivered core functionalities including swipe discovery, real-time match notifications, verified profiles, and an analytics dashboard.",
    limitations:
      "Currently lacks video call features and requires an active critical mass of users for the matching algorithm to function optimally.",
      role: "Front-end Developer — AI face validation implementation, user interface design, and collaborative development.",
    tech: ["Flutter", "Dart", "Firebase", "AI Integration"],
    image: "/images/catchu.webp",
    links: { github: "https://github.com/CatchU-DatingApp", demo: "", paper: "" },
  },
];