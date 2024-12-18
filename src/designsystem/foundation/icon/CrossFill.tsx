import {SVGProps} from "react";

export default function CrossFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.14645 14.4393C7.75592 14.8299 7.75592 15.463 8.14645 15.8536C8.53697 16.2441 9.17014 16.2441 9.56066 15.8536L12 13.4142L14.4393 15.8536C14.8299 16.2441 15.463 16.2441 15.8536 15.8536C16.2441 15.463 16.2441 14.8299 15.8536 14.4393L13.4142 12L15.8536 9.56066C16.2441 9.17014 16.2441 8.53697 15.8536 8.14645C15.463 7.75592 14.8299 7.75592 14.4393 8.14645L12 10.5858L9.56066 8.14645C9.17014 7.75592 8.53697 7.75592 8.14645 8.14645C7.75592 8.53697 7.75592 9.17014 8.14645 9.56066L10.5858 12L8.14645 14.4393Z"
                  fill="current"/>
        </svg>
    )
}