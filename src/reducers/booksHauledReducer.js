const booksHauled = [
    {id: 1, title: "The Hate U Give", author: "Angie Thomas", gender: "Female", country: "United States", series: "", genre: "Contemporary", format: "Hardcover", pubYear: 2017}
];

const booksHauledReducer = (state = {booksHauled: booksHauled}, action = {type:"None"}) => {
    switch (action.type) {
        case "WIDGET_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
        case "ADD_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
};
export default booksHauledReducer()