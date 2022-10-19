'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'PickupLines', 
      [
        {
          line: 'Ask someone if they speak a language other than English. Ask them how they say, “I love you” in that language. Then tell them you are taken, but you will take their number.',
          lineid: 'id001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Walk up to someone and ask them how they pronounce their number (phone number). Then call them immediately.',
          lineid: 'id002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'With earbuds in as if you are on a call, walk up next to someone and ask out loud if they walk to go grab a drink. (The person will think you are talking to them) You can respond that you are on the phone, but you will go with them anyway.',
          lineid: 'id003',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'You look really familiar, did we go to college together? Maybe we took chemistry together? Oh, no, well, we sure do have chemistry now.',
          lineid: 'id004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, I saw you standing here earlier. Do you believe in love at first sight or should I walk by again?',
          lineid: 'id005',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Do you go on dates with strangers? No, well let me introduce myself, I am….',
          lineid: 'id006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, are you sunburned or do you always look this hot?',
          lineid: 'id007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, do you have a pen I can borrow? (Receive pen and act like you are writing something) Your pen does not work. (They respond that it does work) Then try writing your number down right here.',
          lineid: 'id008',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, what are you doing right now? (They respond in a way that they are leaving) Well can I at least tie your laces for you because I do not want you falling for anyone else besides me?',
          lineid: 'id009',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, are you Russian? Well I am rushing to take you out for a drink.',
          lineid: 'id010',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, what do you have on your to-do list today? Well why do not you add me on there because I would love to grab a drink with you.',
          lineid: 'id011',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          line: 'Hey, what was your favorite subject in school? Well, mine was math because I am pretty good with numbers. Why do not you give me yours and I will prove it?',
          lineid: 'id012',
          createdAt: new Date(),
          updatedAt: new Date()
        },
           
      ], 
      {}
      );
      },

      down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PickupLines', null, {});
      }
};
