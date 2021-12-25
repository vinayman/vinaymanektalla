import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
    faGithub,
    faTwitter,
    faFacebook,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
    faScroll,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faGithub,
    faTwitter,
    faFacebook,
    faLinkedin,
    faEnvelope,
    faScroll,
)

config.autoAddCss = false;