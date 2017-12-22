import { INITIAL_SETUP } from '../actions'

const setup = {
                name: "Careers Page",
                logo: "https://placehold.it/100x25",
                logo_url: "https://placehold.it/100x25",
                favicon: "https://placehold.it/100x25",
                favicon_url: "https://placehold.it/25x25",
                logo_white: null,
                url: "https://www.upships.com",
                description: "Company careers page",
                careers_link: "okon-glover",
                logo_path: "/storage/images/yRYCX0qADcJSCxaOziPSHmdPDHSN5u7e5Dam2BEB.jpeg",
                careers_url: "https://upships.com",

                careers_page: {

                    content: [
                      {
                        type: "section_title",
                        title: "Welcome",
                        subtitle: "Create your account to send a resume",
                        text: null,
                        background: {
                          file: "https://up-recruiter.dev/images/1509763863_59fd2b178b745.jpeg",
                          opacity: "100"
                        },
                      },
                    ],

                    slides: [
                      {
                        title: "The best career at sea",
                        subtitle: "We have modern ships",
                        text: "And a great career plan",
                        button: {
                            text: "Join us now!",
                            link: "/apply"
                          },
                        background: {
                          file: "images/1509763863_59fd2b178b745.jpeg",
                          opacity: "100"
                        }
                      },
                    ],

                    menus: [
                      {
                        link: "https://upships.com",
                        label: "Home"
                      }
                    ],
                  }
                }

export default function initialSetup(state = setup, action) {

  switch (action.type) {
    case INITIAL_SETUP:

      return action.payload.data

    default:

      return state
  }
}
