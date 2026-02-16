

  return {
    wordCount,
    sectionsCount: [...new Set(sections.map(s => s.toLowerCase()))].length,
    skillsCount: [...new Set(skills.map(s => s.toLowerCase()))].length,
    actionVerbsCount: actionVerbs.length,
    hasContact
  };
}


export function atsScore(features) {
  let score = 40;
  score += Math.min(20, Math.floor(features.wordCount / 100));
  score += features.hasContact ? 10 : -10;
  score += Math.min(15, features.sectionsCount * 3);
  score += Math.min(15, features.skillsCount * 2);
  score += Math.min(10, features.actionVerbsCount);
  return Math.max(0, Math.min(score, 100));
}

export function jdKeywordMatch(resumeText, jdText, topN = 15) {
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const wordCounts = {};
  normalize(jdText).split(/\s+/).forEach(w => { if(w.length>2) wordCounts[w] = (wordCounts[w]||0)+1; });
  const jdKeywords = Object.entries(wordCounts).sort((a,b)=>b[1]-a[1]).slice(0, topN).map(x=>x[0]);

  const resumeNorm = normalize(resumeText);
  const present = jdKeywords.filter(k => resumeNorm.includes(k));
  const missing = jdKeywords.filter(k => !resumeNorm.includes(k));
  const matchScore = Math.round((present.length / jdKeywords.length) * 100);

  return { jdKeywords, present, missing, matchScore };
}
