export const knowledgeBase = {
  about: {
    name: 'Ahsan Ullah',
    role: 'AI/ML Developer',
    bio: 'BSCS student passionate about Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Python, and AI Agents. Building practical AI applications that solve real-world problems.',
    education: 'BSCS Student',
    interests: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Data Science',
      'Python',
      'AI Agents',
    ],
    goal: 'Build practical AI and Machine Learning applications that solve real-world problems and grow into a professional AI/ML engineer.',
  },
  skills: {
    programming: ['Python', 'SQL', 'C++', 'JavaScript'],
    machineLearning: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Feature Engineering',
      'Model Training',
      'Hyperparameter Tuning',
      'Cross Validation',
    ],
    deepLearning: ['TensorFlow', 'Keras', 'Neural Networks', 'Activation Functions'],
    ai: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Agents'],
    tools: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'VS Code'],
  },
  projects: [
    {
      title: 'Mushroom Classification',
      description:
        'A Machine Learning classification project that predicts whether mushrooms are edible or poisonous using informative features from a mushroom dataset.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Machine Learning'],
      result: '92% Accuracy',
      slug: 'mushroom-classification',
      github: 'https://github.com/AhsanullahCS/mushroom-classification',
      details: {
        problem: 'Predict whether mushrooms are edible or poisonous based on their characteristics.',
        dataset:
          'Mushroom dataset from UCI Machine Learning Repository containing features like cap shape, cap color, gill color, etc.',
        preprocessing:
          'Label encoding of categorical features, handling missing values, feature scaling where needed.',
        model:
          'Various classifiers including Random Forest, SVM, and K-Nearest Neighbors were tested. Random Forest performed best.',
        evaluation: '92% accuracy on test set with high precision and recall for both classes.',
      },
    },
    {
      title: 'Heart Disease Prediction',
      description:
        'A Machine Learning classification project designed to predict heart disease risk using health and lifestyle features.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Machine Learning'],
      result: '85% Accuracy',
      slug: 'heart-disease-prediction',
      github: 'https://github.com/AhsanullahCS/heart-disease-prediction',
      details: {
        problem: 'Predict the presence of heart disease in patients based on various health indicators.',
        dataset:
          'Heart Disease dataset with features like age, sex, chest pain type, cholesterol, blood pressure, etc.',
        preprocessing: 'Handling missing values, encoding categorical variables, feature scaling.',
        model:
          'Multiple classifiers including Logistic Regression, Random Forest, and XGBoost. Best model achieved 85% accuracy.',
        evaluation: '85% accuracy with balanced precision and recall. Model was tuned for optimal performance.',
      },
    },
  ],
  internship: {
    company: 'FlyRank',
    position: 'AI Intern',
    assignments: [
      {
        name: 'Data Contract',
        status: 'completed',
        description: 'Completed Data Contract assignment as part of the internship.',
      },
      {
        name: 'Portfolio Development',
        status: 'completed',
        description: 'Built this professional portfolio website.',
      },
      {
        name: 'AI Capstone',
        status: 'in-progress',
        description: 'Working on the General AI Fluency Capstone project.',
      },
    ],
    github: 'https://github.com/AhsanullahCS/FlyRank_Internship',
  },
  contact: {
    email: 'ahsanullah01472a@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahsan-ullah-cs/',
    github: 'https://github.com/AhsanullahCS',
  },
}
