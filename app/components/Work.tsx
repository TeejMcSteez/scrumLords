import { Suspense } from "react"
import GithubDataTemplate from "./GithubApi"
import Loading from "./Loading";

export default function Work() {
    return(
        <Suspense fallback={<Loading />}>
            <GithubDataTemplate name="scrumLords" owner="TeejMcSteez"/>
            <GithubDataTemplate name="ITSC3155_Final_Project" owner="TeejMcSteez" />
        </Suspense>
    );
}