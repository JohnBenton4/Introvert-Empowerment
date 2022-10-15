'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'conversations',
      [
        {
          conversationstarter: 'Try sharing a related story with a co-worker when in you find yourself in a conversation.',
          category: 'Work',
          level: '1',
          conversationid: 'idW001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask a co-worker a more direct question to find out how their weekend was. An example is - What was the highlight of your weekend?',
          category: 'Work',
          level: '2',
          conversationid: 'idW002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask a journey question to a co-worker. Like - how did you go from working for Walmrt to becoming the senior manager of A.I.?',
          category: 'Work',
          level: '1',
          conversationid: 'idW003',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Talk to a co-worker about what they find the most fulfilling in their current role.',
          category: 'Work',
          level: '2',
          conversationid: 'idW004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask a co-worker how they went from hating exercising to running a marathon.',
          category: 'Work',
          level: '2',
          conversationid: 'idW005',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Have a meaningful one-on-one convesation with a co-worker about something that matters to you instead of just chatting in a group of people.',
          category: 'Work',
          level: '2',
          conversationid: 'idW006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask someone ow their family is doing.',
          category: 'Work',
          level: '1',
          conversationid: 'idW007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask your co-worker if they have any exciting travel plans in the near future.',
          category: 'Work',
          level: '1',
          conversationid: 'idW008',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask someone what kind of music they liek listening to. Try to relate to their answer and tell them what kind of music you like.',
          category: 'Work',
          level: '1',
          conversationid: 'idW009',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Let a trusted firend know that you are going to make it a point to leave sarcasm out of all your conversations today. Have your friend hold you accountable.',
          category: 'Social',
          level: '3',
          conversationid: 'idS001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Let a trusted firend know that you are going to make it a point to leave complaining out of all your conversations today. Have your friend hold you accountable.',
          category: 'Social',
          level: '3',
          conversationid: 'idS002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Talk to someone you trust today and tell them you feel comfortable around them.',
          category: 'Social',
          level: '3',
          conversationid: 'idS003',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Reach out to someone you know well and ask them about something that is important to them. See how they respond.',
          category: 'Social',
          level: '2',
          conversationid: 'ids004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Try exiting a conversation gracefully instead of interupting the flow and running for the door. A good way to begin your exist is - it was great meeting you and I hope we can talk again.',
          category: 'Social',
          level: '2',
          conversationid: 'ids005',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask a friend if they have read any god books recently. Listen to their answer and share with them what books you have read recently.',
          category: 'Social',
          level: '1',
          conversationid: 'ids006',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Show a friend a funny video or meme you discovered. Share with them why you like it.',
          category: 'Social',
          level: '1',
          conversationid: 'ids007',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Share about your pets and let the other person talk about their pet too. Try to be relatable ',
          category: 'Social',
          level: '1',
          conversationid: 'ids008',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Double check your handshake. A lot is said in a handshake, so make sure it embodies confidence, even if you do not feel confident. Someone may even let you know you have a good handshake.',
          category: 'Education',
          level: '1',
          conversationid: 'ide001',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Practice saying yes to classmates when it is in your best interests, and practice how to say no, so you leave the conversation amicably.',
          category: 'Education',
          level: '1',
          conversationid: 'ide002',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Take charge and be the one to choose where your group will work on a project. Make sure it is a comfortable environment for you.',
          category: 'Education',
          level: '2',
          conversationid: 'ide003',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Ask your classmate how they are liking their classes this semester.',
          category: 'Education',
          level: '1',
          conversationid: 'ide004',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Tell a classmate or friend about any travel you have coming up. Also ask if they are traveling in the near future.',
          category: 'Education',
          level: '2',
          conversationid: 'ide005',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          conversationstarter: 'Tell a classmate a joke and ask if they know any funny jokes.',
          category: 'Education',
          level: '1',
          conversationid: 'ide006',
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('conversations', null, {});
  }
}; 
