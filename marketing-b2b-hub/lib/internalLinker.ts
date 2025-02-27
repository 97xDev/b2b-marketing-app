import internalLinks from "@/lib/internalLinks.json";

export function addInternalLinks(content: string) {
  const linkedKeywords = new Set<string>(); // Keep track of linked keywords

  Object.entries(internalLinks).forEach(([keyword, url]) => {
    // Only replace the FIRST occurrence of each keyword
    const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>)`, "i"); // Case-insensitive

    content = content.replace(regex, (match) => {
      if (!linkedKeywords.has(keyword)) {
        linkedKeywords.add(keyword);
        return `<a href="${url}" class="text-blue-400 hover:underline">${match}</a>`;
      }
      return match; // Leave later occurrences unlinked
    });
  });

  return content;
}