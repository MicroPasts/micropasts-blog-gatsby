import { useEffect } from "react";

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsent() {
    useEffect(() => {
        const logo = '<svg height="50" width="50" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.65 190.38"><defs><style>.cls-1{fill:#ffff;}.cls-2{fill:none;stroke:#1d1d1b;}</style></defs><path class="cls-1" d="M226,466.93a2.19,2.19,0,0,1-1.19-2.05V437.94a2.11,2.11,0,0,1,1.19-2.06h-5.89l-9.91,23.43-10-23.43H194a2.44,2.44,0,0,1,1.41,2.06v26.94a2.18,2.18,0,0,1-1.18,2.05h4.6a2.26,2.26,0,0,1-1.28-2.05V442c0-.41-.09-1.19-.09-1.19l.41,1.19,11.06,25.57,11.28-26.3.32-1a5.7,5.7,0,0,0-.1,1v23.7a2.18,2.18,0,0,1-1.18,2.05Zm26.39-1.05c-1.42-.23-1.83-1.23-1.83-2.6V445.34l-5.48,1.09c.74.23,1.6.41,1.6,1.83v14.06c-1.32,1.28-2.6,2.33-4.84,2.33-2.6,0-4.71-2-4.71-5.89V445.34l-5.51,1.09c.68.23,1.55.41,1.55,1.83v10.5c0,6.8,4.24,8.58,6.93,8.58a8.78,8.78,0,0,0,6.68-3.19c0,2.05.54,2.55,1.64,3.19l4-1.46ZM270.85,461c0-3.75-3.19-5.49-6.12-7.18-2.42-1.37-3.88-2.23-3.88-4.15,0-1.19,1.09-2.74,3.43-2.74,2.78,0,4.29,2.83,5,5.2v-5.47a10.68,10.68,0,0,0-5-1.32c-5.07,0-6.76,3.32-6.76,5.56,0,2.61,1.14,4.07,4.7,6.17,3.2,1.87,4.84,2.55,4.84,4.79a3.84,3.84,0,0,1-4.16,3.66c-3,0-5.06-3-5.79-6.22v5.9a11.23,11.23,0,0,0,6.07,2.14c3.33,0,7.67-2.14,7.67-6.34Zm23.65-6.22c0-6.76-4.7-9.44-8.58-9.44-7,0-10.5,6.11-10.5,11.09,0,5.43,3.92,10.91,10.36,10.91,4.89,0,8.4-3.65,8.54-7.4a8.79,8.79,0,0,1-7.31,4.75c-4.84,0-7.3-4-7.3-8.63v-1.28Zm-4.2-1.68H279.89c.36-3.16,2.14-6.13,5.48-6.13,2.51,0,4.93,1.69,4.93,6.13ZM320,465.88c-1.42-.23-1.83-1.23-1.83-2.6V445.34l-5.47,1.09c.73.23,1.59.41,1.59,1.83v14.06c-1.32,1.28-2.6,2.33-4.84,2.33-2.6,0-4.7-2-4.7-5.89V445.34l-5.52,1.09c.68.23,1.55.41,1.55,1.83v10.5c0,6.8,4.24,8.58,6.94,8.58a8.76,8.76,0,0,0,6.67-3.19c0,2.05.54,2.55,1.64,3.19l4-1.46Zm38.49,1.05c-.73-.41-1.19-.73-1.19-1.73V451.59c0-4.3-3.65-6.25-6.75-6.25-2.93,0-5.81,2.14-7.22,4a6.49,6.49,0,0,0-6.21-4c-3.1,0-5.57,2.27-6.67,3.14v-3.14l-5.56,1.09c.77.23,1.64.41,1.64,1.82V465.2c0,1-.46,1.32-1.19,1.73h6.39c-.73-.41-1.28-.73-1.28-1.73V450.26a6.2,6.2,0,0,1,4.62-2.33c3.65,0,4.75,2.24,4.75,4.84V465.2c0,1-.46,1.32-1.19,1.73H345c-.73-.41-1.18-.73-1.18-1.73V451.5a1.66,1.66,0,0,0-.1-.69,6.64,6.64,0,0,1,4.94-2.88c3.52,0,4.8,2.33,4.8,5V465.2c0,1-.6,1.32-1.28,1.73Z" transform="translate(-191 -325.89)"/><path class="cls-1" d="M212.23,384.88l0-3.79H194a2.17,2.17,0,0,1,1.28,2.05v26.95a2,2,0,0,1-1.28,2h6.93a2.09,2.09,0,0,1-1.37-2l.09-14.26h7.54a2.19,2.19,0,0,1,1.6,1.28v-4.42a2.17,2.17,0,0,1-1.6,1.28h-7.54V383s7.63.14,8.72.18c2.24.05,3.25.64,3.89,1.74Zm8.44-1.28a2.26,2.26,0,0,0-4.52,0,2.26,2.26,0,1,0,4.52,0Zm1,28.53c-.73-.4-1.19-.72-1.19-1.72V390.54l-5.56,1.09c.73.23,1.59.42,1.59,1.83v17c0,1-.5,1.32-1.18,1.72Zm18.17-2.68a3.54,3.54,0,0,1-2.92,1.18c-1.42,0-4.16-.45-4.16-4.75V393h6.4v-1.91h-6.31v-4.2L226.88,393h2v12.93c0,4.38,2.69,6.62,6.34,6.62,2.65,0,4.56-1.92,4.61-3.1ZM259.21,408c-.5.91-.73,2-2.7,2.15-4.38.27-8.17.23-9.54.23l11.83-19.32H242.5l-.14,3.47a2.57,2.57,0,0,1,2.47-1.65c2.14-.09,6.43-.09,8.49,0L241.4,412.13H259l.23-4.1Zm34.6-16.94H288a2,2,0,0,1,1.37,2.6l-4.93,11.69-4.29-12.14c-.32-1,.13-1.74,1.5-2.15h-8.44a3,3,0,0,1,2.42,1.83l.68,1.5L272,405.57l-4.43-12.33c-.37-1.05.14-1.74,1.42-2.15h-8a3.57,3.57,0,0,1,2.2,2.24l7.8,19.26L277.28,397,283,412.59l8.5-19.12a4.7,4.7,0,0,1,2.28-2.38Zm9.48-7.49a2.26,2.26,0,0,0-4.51,0,2.26,2.26,0,1,0,4.51,0Zm1,28.53c-.73-.4-1.18-.72-1.18-1.72V390.54l-5.57,1.09c.73.23,1.6.42,1.6,1.83v17c0,1-.5,1.32-1.19,1.72Zm12.42,0c-.73-.4-1.18-.72-1.18-1.72V380.68l-5.66,1.1c.82.27,1.69.41,1.69,1.82v26.81c0,1-.5,1.32-1.19,1.72Zm12.42,0c-.73-.4-1.18-.72-1.18-1.72V380.68l-5.66,1.1c.82.27,1.69.41,1.69,1.82v26.81c0,1-.5,1.32-1.19,1.72Zm11.37-28.53a2.26,2.26,0,0,0-4.51,0,2.26,2.26,0,1,0,4.51,0Zm1,28.53c-.73-.4-1.19-.72-1.19-1.72V390.54l-5.56,1.09c.73.23,1.6.42,1.6,1.83v17c0,1-.51,1.32-1.19,1.72ZM364.11,411c-1.46-.27-1.37-1-1.37-2.1V396.7c0-5.38-4.52-6.16-7.16-6.16a11.65,11.65,0,0,0-7.22,2.28l.1,5.66c1.09-3.28,2.69-6.21,6.57-6.21a3.69,3.69,0,0,1,3.93,4,6.4,6.4,0,0,1-.19,1.91c-1.41,1.51-6.89,2.2-9.31,3.66A5.84,5.84,0,0,0,346.4,407a5.5,5.5,0,0,0,5.48,5.57,10,10,0,0,0,7.12-3.33c.1,2.19.55,2.69,1.6,3.37l3.51-1.55ZM359,407.62a7.12,7.12,0,0,1-5.21,2.37c-2.15,0-3.47-1.37-3.47-3.79s1.64-3.47,3.79-4.24a38.52,38.52,0,0,0,4.89-1.74v7.4Zm43.69,4.51c-.73-.4-1.19-.72-1.19-1.72V396.79c0-4.29-3.65-6.25-6.75-6.25-2.93,0-5.8,2.14-7.22,4a6.5,6.5,0,0,0-6.21-4c-3.1,0-5.57,2.28-6.67,3.15v-3.15l-5.56,1.1c.78.22,1.64.41,1.64,1.82v17c0,1-.45,1.32-1.18,1.72h6.38c-.73-.4-1.28-.72-1.28-1.72V395.47a6.22,6.22,0,0,1,4.62-2.33c3.65,0,4.75,2.24,4.75,4.84v12.43c0,1-.46,1.32-1.19,1.72h6.34c-.73-.4-1.18-.72-1.18-1.72V396.7a1.61,1.61,0,0,0-.1-.68,6.64,6.64,0,0,1,4.94-2.88c3.52,0,4.8,2.33,4.8,5v12.25c0,1-.6,1.32-1.28,1.72Z" transform="translate(-191 -325.89)"/><path class="cls-1" d="M215.06,330.27l-.05-4H191v4a3.23,3.23,0,0,1,2.37-1.78s4.07-.32,7.49-.32v27.12a2.1,2.1,0,0,1-1.18,2h6.75a2.17,2.17,0,0,1-1.19-2V328.17c3.33,0,7.44.32,7.44.32a3.16,3.16,0,0,1,2.38,1.78Zm23.42,27.07c-.78-.4-1.19-.72-1.19-1.73V342.09c0-4.2-3.28-6.34-6.85-6.34-3,0-5.89,2.37-6.9,3.24v-13.1L218,327c.73.27,1.6.5,1.6,1.82v26.8c0,1-.41,1.33-1.19,1.73h6.43c-.82-.4-1.28-.72-1.28-1.73V340.82a6.68,6.68,0,0,1,5-2.38c3.75,0,4.89,2.47,4.89,5.16v12c0,1-.5,1.33-1.23,1.73Zm24.29-12.14c0-6.76-4.7-9.45-8.58-9.45-7,0-10.5,6.12-10.5,11.09,0,5.44,3.92,10.91,10.36,10.91,4.89,0,8.4-3.64,8.53-7.39a8.76,8.76,0,0,1-7.3,4.75c-4.84,0-7.31-4-7.31-8.63V345.2Zm-4.2-1.69H248.15c.37-3.15,2.15-6.12,5.49-6.12,2.51,0,4.93,1.69,4.93,6.12Z" transform="translate(-191 -325.89)"/><path class="cls-1" d="M211.48,510.66c-2,4.23-5.28,4.31-6.48,4.31-5.56,0-7.67-4.58-7.67-8.42,0-4.31,2.61-7.88,7.7-7.88a6.69,6.69,0,0,1,6.31,4.34c.06.11-.24-3.94-.24-3.94a15.34,15.34,0,0,0-6.28-1.52c-6.77,0-10.2,4.82-10.2,9.35,0,5.57,4.63,9.24,9.9,9.24a13.32,13.32,0,0,0,6.72-1.81s.29-3.75.24-3.67Zm19.7,5.24c-.93-.42-1.12-.74-1.33-1.3l-7.3-17.23s-6.84,16.22-7.3,17.23a2.92,2.92,0,0,1-1.22,1.3h3.25c-.69-.26-.77-.69-.56-1.3.11-.32.8-2.08,1.68-4.08h6.9c.82,2.05,1.57,3.76,1.73,4.08.21.61,0,1-.67,1.3Zm-6.34-6.52h-6c1.17-2.88,3-7.46,3-7.46s1.63,4.1,3,7.46Zm27.78,6.52a1.26,1.26,0,0,1-.69-1.19V499a1.23,1.23,0,0,1,.69-1.2h-3.43l-5.78,13.67-5.86-13.67H234a1.42,1.42,0,0,1,.83,1.2v15.72a1.28,1.28,0,0,1-.69,1.19h2.68a1.32,1.32,0,0,1-.74-1.19V501.36c0-.24-.06-.69-.06-.69l.24.69,6.45,14.91,6.58-15.34.19-.61a4,4,0,0,0-.05.56v13.83a1.27,1.27,0,0,1-.7,1.19Zm18.17-5c0-4.4-5.28-4.77-5.28-4.77s3.6-1.07,3.6-4.21c0-3.57-4.34-4.13-6.15-4.13H257.9a1.19,1.19,0,0,1,.74,1.2v15.72a1.22,1.22,0,0,1-.74,1.19h5.75c5.7,0,7.14-2.93,7.14-5Zm-4.21-8.82c0,3.36-3,3.62-4.32,3.62-.64,0-1.12-.05-1.12-.05v-6.72s.62-.05,1.76-.05c1.76,0,3.68.88,3.68,3.2Zm1.39,8.55c0,4-3.9,4.21-5.57,4.21a8.47,8.47,0,0,1-1.26-.08v-7.89s1.31-.05,2.14-.05c2.23,0,4.69.69,4.69,3.81Zm22.71,5.27a5.17,5.17,0,0,1-1.7-1.06,62,62,0,0,1-4-6.13,4.15,4.15,0,0,0-2.58-2,4.62,4.62,0,0,0,4.21-4.47c0-1.68-1.15-4.45-6.48-4.45h-5a1.3,1.3,0,0,1,.72,1.2v15.72a1.34,1.34,0,0,1-.72,1.19h4a1.36,1.36,0,0,1-.75-1.19v-7.33h1.55c1.38,0,1.94,1.14,2.63,2.21.94,1.49,1.89,3.12,3.25,5.12A2.68,2.68,0,0,0,288,516l2.72-.05Zm-6.76-13.58a3.77,3.77,0,0,1-4,4c-.7,0-1.55-.06-1.55-.06v-7.33s.8-.08,2-.08a3.36,3.36,0,0,1,3.57,3.47Zm13.21,13.58a1.32,1.32,0,0,1-.7-1.19V499a1.28,1.28,0,0,1,.7-1.2h-3.94a1.27,1.27,0,0,1,.72,1.2v15.72a1.3,1.3,0,0,1-.72,1.19Zm22.13-9.35c0-2.31-1.38-8.76-10.23-8.76H302.4a1.24,1.24,0,0,1,.7,1.2v15.72a1.27,1.27,0,0,1-.7,1.19h6.13c7.59,0,10.73-5.08,10.73-9.35Zm-2.77,0c0,4-1.76,8.21-7.83,8.21-.8,0-2.05,0-3,0V499a32.37,32.37,0,0,1,3.38-.06c5.52,0,7.46,4.32,7.46,7.62Zm24.95,1.66h-3.93a1.32,1.32,0,0,1,.69,1.2v4.31a8.31,8.31,0,0,1-4.56,1.25c-5.57,0-7.59-4.58-7.59-8.42,0-4.31,2.58-7.88,7.7-7.88a6.74,6.74,0,0,1,6.26,4.39c0-.05-.19-4-.19-4a15.83,15.83,0,0,0-6.31-1.52c-6.82,0-10.25,4.82-10.25,9.35,0,5.57,4.68,9.24,9.93,9.24a17.8,17.8,0,0,0,7.91-2,2.36,2.36,0,0,1-.38-1.14v-3.54a1.31,1.31,0,0,1,.72-1.2Zm16.17,4.87c-1,1.68-2,1.65-4.87,1.68-1.26,0-2.51-.11-3.09-.16v-8.21H354a1.27,1.27,0,0,1,.93.75v-2.58a1.25,1.25,0,0,1-.93.74h-4.34v-6.42l4.58.05a2.6,2.6,0,0,1,2.24.94l-.06-2.08h-10a1.27,1.27,0,0,1,.75,1.2v15.72a1.23,1.23,0,0,1-.8,1.19h10.7l.56-2.82Z" transform="translate(-191 -325.89)"/><line class="cls-2" x1="3.96" y1="157.38" x2="167.22" y2="157.38"/></svg>';
        const cookie = '🍪';
        if (!document.getElementById('cc--main')) {
            window.CookieConsentApi = window.initCookieConsent();
            window.CookieConsentApi.run({
                current_lang : 'en',
                autoclear_cookies : true,                   // default: false
                cookie_name: 'dejp3-cookies',             // default: 'cc_cookie'
                cookie_expiration : 365,                    // default: 182
                page_scripts: true,                         // default: false

                force_consent: true,
                hide_from_bots: true,                   // default: false

                gui_options: {
                    consent_modal: {
                        layout: 'box',                      // box,cloud,bar
                        position: 'bottom left',           // bottom,middle,top + left,right,center
                        transition: 'slide'                 // zoom,slide
                    },
                    settings_modal: {
                        layout: 'box',                      // box,bar
                        position: 'left',                // right,left (available only if bar layout selected)
                        transition: 'slide'                 // zoom,slide
                    }
                },

                onFirstAction: function(){
                    console.log('onFirstAction fired');
                },

                onAccept: function (cookie) {
                    console.log('onAccept fired ...');
                },

                onChange: function (cookie, changed_preferences) {
                    console.log('onChange fired ...');
                },

                languages: {
                    'en': {
                        consent_modal: {
                            title: cookie + ' We use cookies! ',
                            description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                            primary_btn: {
                                text: 'Accept all',
                                role: 'accept_all'              // 'accept_selected' or 'accept_all'
                            },
                            secondary_btn: {
                                text: 'Reject all',
                                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                            }
                        },
                        settings_modal: {
                            title: logo,
                            save_settings_btn: 'Save my choices',
                            accept_all_btn: 'Accept all',
                            reject_all_btn: 'Reject all',
                            close_btn_label: 'Close',
                            cookie_table_headers: [
                                {col1: 'Name'},
                                {col2: 'Domain'},
                                {col3: 'Expiration'},
                                {col4: 'Description'}
                            ],
                            blocks: [
                                {
                                    title: 'Cookie usage and the Fitzwilliam website',
                                    description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                                    toggle: {
                                        value: 'necessary',
                                        enabled: true,
                                        readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                                    }
                                }, {
                                    title: 'Performance and Analytics cookies',
                                    description: 'These cookies allow the website to remember the choices you have made in the past',
                                    toggle: {
                                        value: 'analytics',     // there are no default categories => you specify them
                                        enabled: true,
                                        readonly: false
                                    },
                                    cookie_table: [
                                        {
                                            col1: '^_ga',
                                            col2: 'google.com',
                                            col3: '2 years',
                                            col4: 'Google Analytics identifies unique users across GA sessions through client ID. The client ID is stored in the Google Analytics cookie. The GA cookie is set when a person visits your website for the first time. Google Analytics sends the client ID with each hit to associate hits with a user.',
                                            is_regex: true
                                        },
                                        {
                                            col1: '_gid',
                                            col2: 'google.com',
                                            col3: '1 day',
                                            col4: 'This cookie is installed by Google Analytics. The cookie is used to store information of how visitors use a website and helps in creating an analytics report of how the website is doing.',
                                        }
                                    ]
                                }, {
                                    title: 'Advertisement and Targeting cookies',
                                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                                    toggle: {
                                        value: 'targeting',
                                        enabled: false,
                                        readonly: false
                                    }
                                }, {
                                    title: 'More information',
                                    description: 'For any queries in relation to our policy on cookies and your choices, please review <a class="cc-link" href="https://fitzmuseum.cam.ac.uk/about-us/privacy-and-cookies">the University of Cambridge policy</a>.',
                                }
                            ]
                        }
                    }
                }
            });
        }

    }, []);

    return null;
}