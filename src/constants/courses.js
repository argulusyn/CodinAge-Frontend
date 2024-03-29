const COURSE_TYPES = {
  ARTICLE: "ARTICLE",
  VIDEO: "VIDEO",
  MIXED: "MIXED"
};

const COURSE_TYPE_LABELS = {
  [COURSE_TYPES.ARTICLE]: "Articles",
  [COURSE_TYPES.VIDEO]: "Video",
  [COURSE_TYPES.MIXED]: "Mixed"
};

const COURSE_DIFFICULTY = {
  TRAINING: "TRAINING",
  EASY: "EASY",
  MODERATE: "MODERATE",
  HARD: "HARD",
  ADVANCED: "ADVANCED"
};

const COURSE_DIFFICULTY_LABELS = {
  [COURSE_DIFFICULTY.TRAINING]: "Training",
  [COURSE_DIFFICULTY.EASY]: "Easy",
  [COURSE_DIFFICULTY.MODERATE]: "Moderate",
  [COURSE_DIFFICULTY.HARD]: "Hard",
  [COURSE_DIFFICULTY.ADVANCED]: "Advanced"
};

const COURSE_SECTION = {
  ARTICLE: "ARTICLE",
  VIDEO: "VIDEO",
  QUESTION: "QUESTION"
};

const COURSE_SECTION_LABELS = {
  [COURSE_SECTION.ARTICLE]: "Article",
  [COURSE_SECTION.VIDEO]: "Video",
  [COURSE_SECTION.QUESTION]: "Question"
};

const ARTICLE_SUBSECTIONS = {
  TEXT: "TEXT",
  IMAGE: "IMAGE"
};

export {
  COURSE_TYPES,
  COURSE_TYPE_LABELS,
  COURSE_DIFFICULTY,
  COURSE_DIFFICULTY_LABELS,
  COURSE_SECTION,
  COURSE_SECTION_LABELS,
  ARTICLE_SUBSECTIONS
};
