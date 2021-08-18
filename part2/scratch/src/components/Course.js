import React from 'react'

const Header = (props) => {
    const { course } = props
    return <h1>{course.name}</h1>
}

const Part = (props) => {
    const { part } = props
    return (
        <p>{part.name}: {part.exercises} exercises</p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part part={part} />)}
        </div>
    )
}

const Total = (props) => {
    const { course } = props
    return (
        <strong>Total of {' '}
            {course.parts.reduce((sum, part) => sum + part.exercises, 0)} {' '}
            exercises
        </strong>
    )
}


const Course = (props) => {
    const { course } = props
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )

}


// return (
//     <div>
//         <Header name={course.name} />
//         <ul>
//             {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
//         </ul>
//         {/* <p><strong>The total number of exercises is:
//             {course.parts.reduce((sum, part) => {
//                 console.log(sum)
//                 return (
//                     sum += part
//                 )
//             }, {})}
//         </strong></p> */}
//         <strong>The total number of exercises is:
//             {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
//         </strong>
//     </div>
// )


export default Course