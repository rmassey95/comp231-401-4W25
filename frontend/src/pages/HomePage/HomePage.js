import "./HomePage.css";
import taskImage from "../../assets/images/plan-5659443_1280.png";

function HomePage() {
    return (
        <div id="homepage-container">
            <div class="position-absolute top-0 start-0 h-100 w-100 d-flex justify-content-center align-items-center bg-light">
                < div class="w-75 container p-0 m-0">
                    <div class="row">
                        <div class="col d-flex flex-column justify-content-center align-items-center">
                            <h1>Welcome to <span class="text-primary">MyTracker</span></h1>
                            <p class="fs-5 text-center">Simple task management tool, allowing convenient organization of tasks.</p>
                            <a class="btn btn-primary btn-lg width-fit" href="/login" role="button">Get Organizing</a>
                        </div>
                        <div class="col d-flex flex-column justify-content-center align-items-center">
                            <img src={taskImage} class="img-fluid image-height width-fit" alt="To do task list" />
                            <span>Image by <a href="https://pixabay.com/users/htchnm-14967706/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5659443">Htc Erl</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5659443">Pixabay</a></span>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default HomePage;
