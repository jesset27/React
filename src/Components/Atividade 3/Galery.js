import react from 'react';
import getImageUrl from './utils.js';

// function TableOfContents() {
//     return (
//         <article>
//             <h1>My First Component</h1>
//             <ol>
//                 <li>Components: UI Building Blocks</li>
//                 <li>Defining a Component</li>
//                 <li>Using a Component</li>
//             </ol>
//         </article>
//     );
// }

export function Profile() {
    return (
        <div>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/1200px-Katherine_Johnson_1983.jpg'
                alt="Katherine Johnson"
            />
        </div>
    );
}

export default function Galery() {
    return (
        <section>
            <h1>Amazing scientist</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}



// export function Avatar({ person, size}) {
//     return (
//         <img
//             className='avatar'
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// export function Profile() {
//     return (
//         <div>
//             <Avatar
//                 person={{
//                     name: 'Katsuko Saruhashi',
//                     imageId: 'aIIFbEB',
//                 }}
//             />
//             <Avatar
//                 person={{
//                     name: 'Lin Lanying',
//                     imageId: 'R9LYEBq'
//                 }}
//             />
//         </div>

//     );
// }

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };

// export function TodoList() {
//     return (
//         <>
//             <h1>To Do List for {formatDate(today)}</h1>
//         </>
//     );
// }

// export function TodoList() {
//     return (
//         <div style={person.theme}>
//             <h1>{person.name}'s Todos</h1>
//             <img
//                 className='avatar'
//                 src='https://i.imgur.com/7vQD0fPs.jpgf'
//                 alt='Gregorio Y. Zara'
//             />
//             <ul>
//                 <li>Improve the videophone</li>
//                 <li>Prepare aeronautics lectures</li>
//                 <li>Work on the alcohol-fuelled engine</li>
//             </ul>
//         </div>
//     );
// }

// const today = new Date();
// function formatDate(date) {
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday: 'long' }
//     ).format(date);
// }

// function Avatar({person, size = 100}){


// }

// function Avatar(props) {
//     let person = props.person;
//     let size = props.size;
//     return (
//         <img
//             className='avatar'
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// export function Profile({ person, size, isSepia, thickBorder }) {
//     return (
//         <div className='card'>
//             <Avatar
//                 person={person}
//                 size={size}
//                 isSepia={isSepia}
//                 thickBorder={thickBorder}
//             />
//         </div>
//     );
// }

// function Item({ name, isPacked }){
//     // if (isPacked){
//     //     return null
//     // }
//     return ( <li className='item'>
//         {isPacked ? (
//         <del>
//             {name + '✔'} 
//         </del>
//         ) : ( 
//         name
//         )}
//     </li>
//     );
// }

// export function PackingList(){
//     return(
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson:',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'aIIFbEB'
    },
    {
        id: 1,
        name: 'Mario José Molina-Pasquel Henriquez:',
        profession: 'chemist',
        accomplishment: 'discovery of Artic ozone hole',
        imageId: 'aIIFbEB'
    },
    {
        id: 2,
        name: 'Mahammad Abdus Salam:',
        profession: 'physicist',
        accomplishment: 'eletromagnitism theory',
        imageId: 'aIIFbEB'
    },
    {
        id: 3,
        name: 'Percy Layon Julian:',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drogs, steroids',
        imageId: 'aIIFbEB'
    },
    {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar:',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'aIIFbEB'
    }
];

// export default function List() {
//     const chemist = people.filter(person =>
//         person.profession === 'chemist'
//     );

//     const listItems = people.map(person =>
//         <li key={person.id}>
//             <img
//                 src={getImageUrl(person)}
//                 alt={person.name}
//             />
//             <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//             </p>
//         </li>
//         );
//     return <ul>{listItems}</ul>;
// }