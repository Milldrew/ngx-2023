import { StreamInfo, StreamsAccordionDIO } from './millterial.types';
const NAMES = ['Ann', 'Andrew', 'Debra', 'James', 'John', 'Joe', 'Zoe'];

function streamInfoFactory(): StreamInfo {
  let name = NAMES[Math.ceil(Math.random() * 10)];

  return {
    streamId: Date.now().toString(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

    `,
    hostsName: name,
    hostsAvatar:
      'https://www.shutterstock.com/image-photo/handicapped-war-veterans-wheelchairs-professional-600w-2012844995.jpg',
    header: 'Join my stream were talking about unimportant stuff',
  };
}

export const streamList: StreamsAccordionDIO = {
  streamList: [streamInfoFactory(), streamInfoFactory(), streamInfoFactory()],
};
