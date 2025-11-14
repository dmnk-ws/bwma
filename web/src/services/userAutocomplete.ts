import {User} from "../entities/user/User.js";

const AUTOCOMPLETE_RESULT_ID = 'autocomplete-result';

export function filterUsers(users: User[], searchValue: string): string[] {
  const suggestions = users.map((user) => `${user.firstname} ${user.lastname}`);

  return suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchValue.toLowerCase())
  );
}

export function renderSuggestions(
  searchEl: HTMLInputElement,
  suggestions: string[],
  searchValue: string,
): void {
  clearSuggestions();

  const list = window.document.createElement('div');
  list.id = AUTOCOMPLETE_RESULT_ID;
  searchEl.parentNode?.appendChild(list);

  if (suggestions.length === 0) {
    list.appendChild(
      createNoSuggestionElement()
    );

    return;
  }

  suggestions.forEach((suggestion) => {
    list.appendChild(
      createSuggestionElement(suggestion, searchValue, searchEl)
    );
  });
}

export function clearSuggestions(): void {
  window.document.getElementById(AUTOCOMPLETE_RESULT_ID)?.remove();
}

function createSuggestionElement(
  suggestion: string,
  searchValue: string,
  searchEl: HTMLInputElement,
): HTMLDivElement {
  const div = window.document.createElement('div');
  const matchIndex = suggestion.toLowerCase().indexOf(searchValue.toLowerCase());
  const before = suggestion.substring(0, matchIndex);
  const match = suggestion.substring(matchIndex, matchIndex + searchValue.length);
  const after = suggestion.substring(matchIndex + searchValue.length);

  div.innerHTML = before + `<strong>${match}</strong>` + after;

  div.addEventListener('click', () => {
    searchEl.value = suggestion;
    clearSuggestions();
  });

  return div;
}

function createNoSuggestionElement(): HTMLDivElement {
  const div = window.document.createElement('div');
  div.textContent = 'No suggestions found.';

  return div;
}