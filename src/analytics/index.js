import ReactGA from "react-ga";

const isReactGAEnabled = !!process.env.REACT_APP_GA_TRACKING_ID;

export default class GA {
  static initGA = () => {
    if (isReactGAEnabled) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
        debug: false // Set to true to see console logs
      });
    }
  };

  //   static initGTM = () => {
  //     if (isReactGTMEnabled) {
  //       const tagManagerArgs = {
  //         gtmId: process.env.,
  //         dataLayer: ,
  //       };

  //       TagManager.initialize(tagManagerArgs);
  //     }
  //   };

  static options = {
    category: ({ scope }: Category) => `study_${scope}`,
    action: ({ action }) => action,
    label: ({ label }) => label
  };

  static event = ({ scope, action, label }: Event) => {
    ReactGA.event({
      category: this.options.category({ scope }),
      action: this.options.action({ action }),
      label: this.options.label({
        label
      })
    });
  };
}
