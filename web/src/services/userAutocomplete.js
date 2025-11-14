const AUTOCOMPLETE_RESULT_ID = 'autocomplete-result';
export function filterUsers(users, searchValue) {
    const suggestions = users.map((user) => `${user.firstname} ${user.lastname}`);
    return suggestions.filter((suggestion) => suggestion.toLowerCase().includes(searchValue.toLowerCase()));
}
export function renderSuggestions(searchEl, suggestions, searchValue) {
    var _a;
    clearSuggestions();
    const list = window.document.createElement('div');
    list.id = AUTOCOMPLETE_RESULT_ID;
    (_a = searchEl.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(list);
    if (suggestions.length === 0) {
        list.appendChild(createNoSuggestionElement());
        return;
    }
    suggestions.forEach((suggestion) => {
        list.appendChild(createSuggestionElement(suggestion, searchValue, searchEl));
    });
}
export function clearSuggestions() {
    var _a;
    (_a = window.document.getElementById(AUTOCOMPLETE_RESULT_ID)) === null || _a === void 0 ? void 0 : _a.remove();
}
function createSuggestionElement(suggestion, searchValue, searchEl) {
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
function createNoSuggestionElement() {
    const div = window.document.createElement('div');
    div.textContent = 'No suggestions found.';
    return div;
}
//# sourceMappingURL=userAutocomplete.js.map