

const GifDisplay = ({giph}) => {

    if(giph === null) {
        return (
            <h1>Please press button for a Gif!</h1>
        )
    }

    return (
        <div>
            <h1>{giph.data.type}</h1>
            <img src={giph.data.images.fixed_height.url}/>
            <h1>{giph.data.title}</h1>
        </div>
    )
}

export default GifDisplay

//https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2d0bnFhczJ0MnZ6NDY0ZnUya2NnYXRwZzh4MnZ5bm82bHUya2FveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pNF9IuxuMcoxmHICNS/giphy.gif


//https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmlycDhhMTFnZmRlZ3I4NGp6NHUwMXNkNHZxaGlucDZrdTIwNW9sZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tJUkdqdvt1sIERGUBy/giphy.gif