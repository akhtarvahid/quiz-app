export function applyClasses(selectedAns, selectedRow, option, id) {
    return Object.keys(selectedAns).length !== 0 ? 
     (option.correct === true && option.id === selectedAns.id && id === selectedRow.id) ? 
     'card-text options-text correct' :
     (option.id === selectedAns.id && id === selectedRow.id) ? 
     'card-text options-text incorrect': 'card-text options-text' : 'card-text options-text'
  }
  export function applyAnswerClick(selectedAns,selectedRow, option, id) {
    return Object.keys(selectedAns).length !== 0 &&
    (option.id !== selectedAns.id && 
    id === selectedRow.id);
  }