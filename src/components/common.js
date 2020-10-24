export function applyClasses(selectedAns, selectedRow, option, id) {
    return Object.keys(selectedAns).length !== 0 ? 
     (option.id === selectedRow.answerId &&  option.id === selectedAns.id && id === selectedRow.id) ? 
     'card-text options-text correct' :
     (option.id === selectedAns.id && id === selectedRow.id) ? 
     'card-text options-text incorrect': 'card-text options-text' : 'card-text options-text';
  }
  export function applyAnswerClick(selectedAns,selectedRow, option, id) {
    return Object.keys(selectedAns).length !== 0 &&
    (option.id !== selectedAns.id && 
    id === selectedRow.id);
  }
  export function applyMark (selectedAns, selectedRow, option, id) {
    return Object.keys(selectedAns).length !== 0 && 
    (option.id === selectedRow.answerId &&  option.id === selectedAns.id && id === selectedRow.id)
  }
  export function applyListOrdering (option) {
    return option.id === 1 ? 'A' : option.id === 2 ? 'B' : option.id === 3 ? 'C': option.id === 4 ? 'D' : ''
  }