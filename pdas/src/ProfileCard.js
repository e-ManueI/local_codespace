function ProfileCard({ title, handle, image }) {
    // const title = props.title;
    // const handle = props.handle;

    // Destructuring
    // const { title, handle } = props;

    // Destructuring in an argument list at the function at the top

    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard