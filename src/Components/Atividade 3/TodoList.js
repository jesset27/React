import BackButton from '../BackButton';
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

// export function TodoList() {
//     return (
//         <>
//             <h1>To Do List for {formatDate(today)}</h1>
//         </>
//     );
// }

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className='avatar'
                src='https://i.imgur.com/7vQD0fPs.jpgf'
                alt='Gregorio Y. Zara'
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
