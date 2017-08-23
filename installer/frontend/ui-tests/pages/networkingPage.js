const networkingPageCommands = {
  test(json) {
    return this
      .waitForElementPresent('@domain', 10000)
      .click('@domain')
      .click('@advanced')
      .setField('#podCIDR', json.tectonic_cluster_cidr, true)
      .setField('#serviceCIDR', json.tectonic_service_cidr, true);
  },
};

module.exports = {
  url: '',
  commands: [networkingPageCommands],
  elements: {
    advanced: {
      selector: '//*[text()[contains(.,"Advanced Settings")]]',
      locateStrategy: 'xpath',
    },
    domain: {
      selector: 'option[value=Z1ILIMNSJGTMO2]',
    },
  },
};
