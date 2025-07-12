import { Suspense } from "react"
import GithubDataTemplate from "./GithubApi"

export default function Work() {
    return(
        <Suspense>
            <GithubDataTemplate name="scrumLords" owner="TeejMcSteez"/>
            <GithubDataTemplate name="ITSC3155_Final_Project" owner="TeejMcSteez" />
        </Suspense>
    );
}