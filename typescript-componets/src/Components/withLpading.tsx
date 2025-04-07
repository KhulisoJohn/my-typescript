//Add loading state to a component



function withLoading<T>(Component:React.ComponentType<T> ){
    return (props: T & {isLoading:boolean}) => {
        return props.isLoading? <div>Loading...</div>:<Component{...props} />
    };
}

export default withLoading;


