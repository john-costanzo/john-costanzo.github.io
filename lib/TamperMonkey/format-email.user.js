// ==UserScript==
// @name         Format Email
// @version      2026-01-20_11-27
// @description  Format an email containing hyperlinks to either a New York Times article or a general URL.
// @author       John Costanzo
// @match        https://mail.google.com/mail/u/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/format-email.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/format-email.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// IMPORTANT! Comment out the // Object.defineProperty(exports, "__esModule", { value: true }); line, above
// import DOMPurify from 'dompurify';
(function () {
    'use strict';
    var scriptName = "format-email";
    var subjectContainerClassName = "aoT";
    var messageAreaId = ":ma";
    var addSignatureIds = [":mr", ":mp"];
    var Severities;
    (function (Severities) {
        Severities[Severities["debug"] = 0] = "debug";
        Severities[Severities["log"] = 1] = "log";
        Severities[Severities["warn"] = 2] = "warn";
        Severities[Severities["error"] = 3] = "error";
    })(Severities || (Severities = {}));
    ;
    var aphorisms = [
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
        "A clear conscience is a sign of a fuzzy memory.",
        "A diamond is merely a lump of coal that did well under pressure.",
        "“Age is of no importance unless you're a cheese.” — Billie Burke",
        "Aging is mandatory; maturity is optional.",
        "Always borrow money from a pessimist, they never expect it back. — Mark Twain",
        "Behind every great man is a woman rolling her eyes.",
        "Be like a postage stamp… stick to a thing till you get there.  — Josh Billings",
        "Build your dreams, or someone else will hire you to build theirs.",
        "By the time a man realizes that his father was right, he has a son who thinks he's wrong. — Charles Wadsworth",
        "By the time you learn the rules of life, you're too old to play the game.",
        "Change is inevitable, except from a vending machine.",
        "Doing nothing is hard, you never know when you're done.",
        "Don't follow your dreams; chase them down with a baseball bat.",
        "Even a stopped clock is right twice a day… embrace your inner clock!",
        "Even if you are on the right track, you'll get run over if you just sit there. —  Will Rogers",
        "Everyone has a purpose in life. Perhaps yours is watching television. — David Letterman",
        "Every time you are able to find humor in a difficult situation, you win.",
        "Failure is the condiment that gives success its flavor. — Truman Capote",
        "Half the lies they tell about me aren't true. — Yogi Berra",
        "Hard work never killed anybody, but why take the chance?",
        "I always wanted to be somebody, but now I realize I should have been more specific. — Lily Tomlin",
        "I am not a product of my circumstances. I am a product of my decisions.",
        "I choose a lazy person to do a hard job because a lazy person will find an easy way to do it. — Bill Gates",
        "I didn't fail the test. I just found 100 ways to do it wrong. — Benjamin Franklin",
        "If at first you don't succeed, then skydiving definitely isn't for you. — Steven Wright",
        "I finally realized that people are prisoners of their phones… that's why it's called a “cell” phone.",
        "If you fall, I'll be there. — The Floor",
        "If you find yourself in a hole, the first thing to do is stop digging.",
        "If you're going through hell, keep going. — Winston Churchill",
        "If you think nobody cares if you're alive, try missing a couple of car payments.",
        "If you think you are too small to make a difference, try sleeping with a mosquito. — Dalai Lama",
        "Life is like a sewer what you get out of it depends on what you put into it. — Tom Lehrer",
        "Life is what happens when you're busy making other plans.",
        "My therapist told me the way to achieve true inner peace is to finish what I start. So far I've finished two bags of M&Ms and a chocolate cake. I feel better already. — Dave Barry",
        "Opportunities are like sunrises. If you wait too long, you miss them. — William Arthur Ward",
        "Opportunity is missed by most people because it is dressed in overalls and looks like work. — Thomas Edison",
        "Running away from your problems is a race you'll never win.",
        "Some people are like clouds. When they disappear, it's a beautiful day.",
        "Stress is like a rocking chair. It gives you something to do but gets you nowhere.",
        "Success is just a matter of hanging on after others have let go.",
        "The best way to cheer yourself up is to try to cheer somebody else up.",
        "The early bird gets the worm, but the second mouse gets the cheese.",
        "The elevator to success is out of order. You'll have to use the stairs one step at a time. — Joe Girard",
        "The key to eating healthy is not eating any food that has a TV commercial. — Mike Birbiglia",
        "The road to success is dotted with many tempting parking spaces. — Will Rogers",
        "The secret of life is honesty and fair dealing. If you can fake that, you've got it made. — Groucho Marx",
        "The trouble with the rat race is that even if you win, you're still a rat.",
        "When everything's coming your way, you're in the wrong lane.",
        "When I hear somebody sigh, 'Life is hard', I am always tempted to ask, Compared to what?",
        "When life gives you melons, you might be dyslexic.",
        "You can't have everything. Where would you put it? — Steven Wright",
        "You have to be odd to be number one. — Dr. Seuss",
        "Life is available only in the present moment.  — Thich Nhat Hanh",
        "Waking up this morning, I smile. Twenty-four brand-new hours are before me.I vow to live them deeply and learn to look at everything around me with the eyes of compassion.  — Thich Nhat Hanh",
        "Because you are alive, everything is possible.  — Thich Nhat Hanh",
        "The present moment is filled with joy and happiness. If you are attentive, you will see it.  — Thich Nhat Hanh",
        "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.  — Thich Nhat Hanh",
        "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.  — Thich Nhat Hanh",
        "Our own life has to be our message.  — Thich Nhat Hanh",
        "Every breath we take, every step we make, can be filled with peace, joy, and serenity.  — Thich Nhat Hanh",
        "Life is a miracle, and being aware of simply this can already make us very happy.  — Thich Nhat Hanh",
        "Breathing in, I calm my body. Breathing out, I smile.  — Thich Nhat Hanh",
        "Root out the violence in your life, and learn to live compassionately and mindfully. Seek peace. When you have peace within, real peace with others is possible.  — Thich Nhat Hanh",
        "People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.  — Thich Nhat Hanh",
        "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.  — Thich Nhat Hanh",
        "When you say something really unkind, when you do something in retaliation your anger increases. You make the other person suffer, and he will try hard to say or to do something back to get relief from his suffering. That is how conflict escalates.  — Thich Nhat Hanh",
        "Smile, breathe, and go slowly.  — Thich Nhat Hanh",
        "My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground on which I stand.  — Thich Nhat Hanh",
        "When another person makes you suffer, it is because he suffers deeply within himself, and his suffering is spilling over. He does not need punishment; he needs help.  — Thich Nhat Hanh",
        "We are here to awaken from our illusion of separateness.  — Thich Nhat Hanh",
        "When you love someone, the best thing you can offer is your presence. How can you love if you are not there?  — Thich Nhat Hanh",
        "Walk as if you are kissing the Earth with your feet.  — Thich Nhat Hanh",
        "There is no way to happiness - happiness is the way.  — Thich Nhat Hanh",
        "Keeping your body healthy is an expression of gratitude to the whole cosmos — the trees, the clouds, everything.  — Thich Nhat Hanh",
        "The mind can go in a thousand directions, but on this beautiful path, I walk in peace. With each step, the wind blows. With each step, a flower blooms.  — Thich Nhat Hanh",
        "Peace can exist only in the present moment. It is ridiculous to say 'Wait until I finish this, then I will be free to live in peace.' What is 'this'? A diploma, a job, a house, the payment of a debt? If you think that way, peace will never come. There is always another 'this' that will follow the present one. If you are not living in peace at this moment, you will never be able to. If you truly want to be at peace, you must be at peace right now. Otherwise, there is only 'the hope of peace some day.'  — Thich Nhat Hanh",
        "Understanding means throwing away your knowledge.  — Thich Nhat Hanh",
        "You carry Mother Earth within you. She is not outside of you. Mother Earth is not just your environment.  — Thich Nhat Hanh",
        "The kingdom of God is available to you in the here and the now. But the question is whether you are available to the kingdom. Our practice is to make ourselves ready for the kingdom so that it can manifest in the here and the now. You don't need to die in order to enter the kingdom of heaven. In fact, you have to be truly alive in order to do so.  — Thich Nhat Hanh",
        "The wave does not need to die to become water. She is already water.  — Thich Nhat Hanh",
        "The practice of peace and reconciliation is one of the most vital and artistic of human actions.  — Thich Nhat Hanh",
        "Anger is like a storm rising up from the bottom of your consciousness. When you feel it coming, turn your focus to your breath.  — Thich Nhat Hanh",
        "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.  — Thich Nhat Hanh",
        "To live in the present moment is a miracle. The miracle is not to walk on water. The miracle is to walk on the green Earth in the present moment, to appreciate the peace and beauty that are available now.  — Thich Nhat Hanh",
        "Do not say that I’ll depart tomorrow — even today I am still arriving.  — Thich Nhat Hanh",
        "When you plant lettuce, if it does not grow well, you don’t blame the lettuce. You look for reasons it is not doing well. It may need fertilizer, or more water, or less sun. You never blame the lettuce. Yet if we have problems with our friends or family, we blame the other person. But if we know how to take care of them, they will grow well, like the lettuce. Blaming has no positive effect at all, nor does trying to persuade using reason and argument. That is my experience. No blame, no reasoning, no argument, just understanding. If you understand, and you show that you understand, you can love, and the situation will change.  — Thich Nhat Hanh",
        "I promise myself that I will enjoy every minute of the day that is given me to live.  — Thich Nhat Hanh",
        "Until there is peace between religions, there can be no peace in the world.  — Thich Nhat Hanh",
        "The essence of nonviolence is love.  — Thich Nhat Hanh",
        "There is no enlightenment outside of daily life.  — Thich Nhat Hanh",
        "A human being is like a television set with millions of channels…. We cannot let just one channel dominate us. We have the seed of everything in us, and we have to recover our own sovereignty.  — Thich Nhat Hanh",
        "In mindfulness one is not only restful and happy, but alert and awake. Meditation is not evasion; it is a serene encounter with reality.  — Thich Nhat Hanh",
        "We are all the leaves of one tree. We are all the waves of one sea.  — Thich Nhat Hanh",
        "The mind can go in a thousand directions, but on this beautiful path, I walk in peace. With each step, the wind blows. With each step, a flower blooms.  — Thich Nhat Hanh",
        "In true dialogue, both sides are willing to change.  — Thich Nhat Hanh",
        "Remember that there is only one important time and that is now. The present moment is the only time over which we have dominion. The most important person is always the person you are with, who is right before you, for who knows if you will have dealings with any other person in the future? The most important pursuit is making the person standing at your side happy, for that alone is the pursuit of life.  — Thich Nhat Hanh",
        "Your true home is in the here and the now.  — Thich Nhat Hanh",
        "Many people are alive but don't touch the miracle of being alive.  — Thich Nhat Hanh",
        "If we are not fully ourselves, truly in the present moment, we miss everything.  — Thich Nhat Hanh",
        "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.  — Thich Nhat Hanh",
        "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.  — Thich Nhat Hanh",
        "Many people think excitement is happiness. But when you are excited, you are not peaceful. True happiness is based on peace.  — Thich Nhat Hanh",
        "Every thought you produce, anything you say, any action you do, it bears your signature.  — Thich Nhat Hanh",
        "Our notions about happiness entrap us. We forget that they are just ideas. Our idea of happiness can prevent us from actually being happy. We fail to see the opportunity for joy that is right in front of us when we are caught in a belief that happiness should take a particular form.  — Thich Nhat Hanh",
        "If you love someone but rarely make yourself available to him or her, that is not true love.  — Thich Nhat Hanh",
        "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.  — Thich Nhat Hanh",
        "We have more possibilities available in each moment than we realize.  — Thich Nhat Hanh",
        "Enlightenment is when a wave realizes it is the ocean.  — Thich Nhat Hanh",
        "At any moment, you have a choice that either leads you closer to your spirit or further away from it.  — Thich Nhat Hanh",
        "Letting go gives us freedom, and freedom is the only condition for happiness.  — Thich Nhat Hanh",
        "If, in our heart, we still cling to anything — anger, anxiety, or possessions — we cannot be free.  — Thich Nhat Hanh",
        "If you look deeply into the palm of your hand, you will see your parents and all generations of your ancestors. All of them are alive in this moment. Each is present in your body. You are the continuation of each of these people.  — Thich Nhat Hanh",
        "Freedom is not given to us by anyone; we have to cultivate it ourselves. It is a daily practice… No one can prevent you from being aware of each step you take or each breath in and breath out.  — Thich Nhat Hanh",
        "It is possible to live happily in the here and now. So many conditions of happiness are available—more than enough for you to be happy right now. You don't have to run into the future in order to get more.  — Thich Nhat Hanh",
        "The past is gone, the future is not yet here, and if we do not go back to ourselves in the present moment, we cannot be in touch with life.  — Thich Nhat Hanh",
        "Enlightenment is always there. Small enlightenment will bring great enlightenment. If you breathe in and are aware that you are alive—that you can touch the miracle of being alive—then that is a kind of enlightenment. Many people are alive but don't touch the miracle of being alive.  — Thich Nhat Hanh",
        "Thanks to impermanence, everything is possible.  — Thich Nhat Hanh",
        "We have to continue to learn. We have to be open. And we have to be ready to release our knowledge in order to come to a higher understanding of reality.  — Thich Nhat Hanh",
        "Love is the capacity to take care, to protect, to nourish. If you are not capable of generating that kind of energy toward yourself — if you are not capable of taking care of yourself, of nourishing yourself, of protecting yourself — it is very difficult to take care of another person.  — Thich Nhat Hanh",
        "You must love in such a way that the person you love feels free.  — Thich Nhat Hanh",
        "To dwell in the here and now does not mean you never think about the past or responsibly plan for the future.  — Thich Nhat Hanh",
        "The present moment is the only time over which we have dominion.  — Thich Nhat Hanh",
        "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.  — Thich Nhat Hanh",
        "Be yourself. Life is precious as it is. All the elements for your happiness are already here. There is no need to run, strive, search, or struggle. Just be.  — Thich Nhat Hanh",
        "The seed of suffering in you may be strong, but don't wait until you have no more suffering before allowing yourself to be happy.  — Thich Nhat Hanh",
        "You are not an observer, you are a participant.  — Thich Nhat Hanh",
        "Words and thoughts concerning compassionate action that are not put into practice are like beautiful flowers that are colorful but have no fragrance.  — Thich Nhat Hanh",
        "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth. — Oscar Wilde",
        "No man is rich enough to buy back his past. — Oscar Wilde",
        "The best way to appreciate your job is to imagine yourself without one. — Oscar Wilde",
        "Whenever a man does a thoroughly stupid thing, it is always from the noblest motives. — Oscar Wilde",
        "Nothing can cure the soul but the senses, just as nothing can cure the senses but the soul. — Oscar Wilde",
        "The old believe everything, the middle-aged suspect everything, the young know everything. — Oscar Wilde",
        "The public is wonderfully tolerant. It forgives everything except genius. — Oscar Wilde",
        "Man can believe the impossible, but man can never believe the improbable. — Oscar Wilde",
        "There is no necessity to separate the monarch from the mob; all authority is equally bad. — Oscar Wilde",
        "The moment you think you understand a great work of art, it's dead for you. — Oscar Wilde",
        "The well bred contradict other people. The wise contradict themselves. — Oscar Wilde",
        "A man who does not think for himself does not think at all. — Oscar Wilde",
        "Experience is simply the name we give our mistakes. — Oscar Wilde",
        "No great artist ever sees things as they really are. If he did, he would cease to be an artist. — Oscar Wilde",
        "One's real life is so often the life that one does not lead. — Oscar Wilde",
        "It is better to be beautiful than to be good. But it is better to be good than to be ugly. — Oscar Wilde",
        "To expect the unexpected shows a thoroughly modern intellect. — Oscar Wilde",
        "Experience is one thing you can't get for nothing. — Oscar Wilde",
        "It is better to have a permanent income than to be fascinating. — Oscar Wilde",
        "Whenever people agree with me I always feel I must be wrong. — Oscar Wilde",
        "A man's face is his autobiography. A woman's face is her work of fiction. — Oscar Wilde",
        "I choose my friends for their good looks, my acquaintances for their good characters, and my enemies for their intellects. A man cannot be too careful in the choice of his enemies. — Oscar Wilde",
        "We live in an age when unnecessary things are our only necessities. — Oscar Wilde",
        "Humanity takes itself too seriously. It is the world's original sin. If the cave-man had known how to laugh, History would have been different. — Oscar Wilde",
        "A little sincerity is a dangerous thing, and a great deal of it is absolutely fatal. — Oscar Wilde",
        "When the gods wish to punish us, they answer our prayers. — Oscar Wilde",
        "Some cause happiness wherever they go; others whenever they go. — Oscar Wilde",
        "What is a cynic? A man who knows the price of everything and the value of nothing. — Oscar Wilde",
        "The critic has to educate the public; the artist has to educate the critic. — Oscar Wilde",
        "One of the many lessons that one learns in prison is, that things are what they are and will be what they will be. — Oscar Wilde",
        "If you pretend to be good, the world takes you very seriously. If you pretend to be bad, it doesn’t. Such is the astounding stupidity of optimism. — Oscar Wilde",
        "If you want to tell people the truth, make them laugh, otherwise, they’ll kill you. — Oscar Wilde",
        "Always forgive your enemies; nothing annoys them so much. — Oscar Wilde",
        "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
        "If one cannot enjoy reading a book over and over again, there is no use in reading it at all. — Oscar Wilde",
        "The pure and simple truth is rarely pure and never simple. — Oscar Wilde",
        "The books that the world calls immoral are books that show the world its own shame. — Oscar Wilde",
        "You can never be overdressed or over-educated. — Oscar Wilde",
        "I don't want to go to heaven. None of my friends are there. — Oscar Wilde",
        "I am so clever that sometimes I don't understand a single word of what I am saying. — Oscar Wilde",
        "A good friend will always stab you in the front. — Oscar Wilde",
        "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation. — Oscar Wilde",
        "Anyone who lives within their means suffers from a lack of imagination. — Oscar Wilde",
        "Be yourself; everyone else is taken. — Oscar Wilde",
        "I think God, in creating man, somewhat overestimated his ability. — Oscar Wilde",
        "Experience is merely the name men gave to their mistakes. — Oscar Wilde",
        "I always pass on good advice. It is the only thing to do with it. It is never of any use to oneself. — Oscar Wilde",
        "Never love anyone who treats you like you're ordinary. — Oscar Wilde",
        "I can resist anything except temptation. — Oscar Wilde",
        "Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one. — Oscar Wilde",
        "When a man has once loved a woman he will do anything for her except continue to love her. — Oscar Wilde",
        "One can survive everything, nowadays, except death, and live down everything except a good reputation. — Oscar Wilde",
        "Our ambition should be to rule ourselves, the true kingdom for each one of us; and true progress is to know more, and be more, and to do more. — Oscar Wilde",
        "Society exists only as a mental concept; in the real world there are only individuals. — Oscar Wilde",
        "Beauty is the only thing that time cannot harm. Philosophies fall away like sand, creeds follow one another, but what is beautiful is a joy for all seasons, a possession for all eternity. — Oscar Wilde",
        "Life imitates art far more than art imitates Life. — Oscar Wilde",
        "Man is a rational animal who always loses his temper when he is called upon to act in accordance with the dictates of reason. — Oscar Wilde",
        "No woman should ever be quite accurate about her age. It looks so calculating. — Oscar Wilde",
        "Women love us for our defects. If we have enough of them, they will forgive us everything, even our gigantic intellects. — Oscar Wilde",
        "It is absurd to divide people into good and bad. People are either charming or tedious. — Oscar Wilde",
        "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live. — Oscar Wilde",
        "I have the simplest tastes. I am always satisfied with the best. — Oscar Wilde",
        "An excellent man; he has no enemies; and none of his friends like him. — Oscar Wilde",
        "Life is far too important a thing ever to talk seriously about. — Oscar Wilde",
        "The nicest feeling in the world is to do a good deed anonymously-and have somebody find out. — Oscar Wilde",
        "A thing is not necessarily true because a man dies for it. — Oscar Wilde",
        "The only way to get rid of temptation is to yield to it. — Oscar Wilde",
        "Morality is simply the attitude we adopt towards people we personally dislike. — Oscar Wilde",
        "It takes great deal of courage to see the world in all its tainted glory, and still to love it. — Oscar Wilde",
        "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
        "A bore is someone who deprives you of solitude without providing you with company. — Oscar Wilde",
        "They've promised that dreams can come true - but forgot to mention that nightmares are dreams, too. — Oscar Wilde",
        "Behind every exquisite thing that existed, there was something tragic. — Oscar Wilde",
        "Anybody can sympathize with the sufferings of a friend, but it requires a very fine nature to sympathize with a friend's success. — Oscar Wilde",
        "Society often forgives the criminal; it never forgives the dreamer. — Oscar Wilde",
        "In this world there are only two tragedies. One is not getting what one wants, and the other is getting it. — Oscar Wilde",
        "The public is wonderfully tolerant. It forgives everything except genius. — Oscar Wilde",
        "When I was young I thought that money was the most important thing in life; now that I am old I know that it is. — Oscar Wilde",
        "Life is never fair, and perhaps it is a good thing for most of us that it is not. — Oscar Wilde",
        "When one is in love, one always begins by deceiving one's self, and one always ends by deceiving others. That is what the world calls a romance. — Oscar Wilde",
        "Every portrait that is painted with feeling is a portrait of the artist, not of the sitter. — Oscar Wilde",
        "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them. — Oscar Wilde",
        "Hatred is blind, as well as love. — Oscar Wilde",
        "The only difference between the saint and the sinner is that every saint has a past, and every sinner has a future. — Oscar Wilde",
        "The true mystery of the world is the visible, not the invisible. — Oscar Wilde",
        "The good ended happily, and the bad unhappily. That is what fiction means. — Oscar Wilde",
        "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught. — Oscar Wilde",
        "Questions are never indiscreet, answers sometimes are. — Oscar Wilde",
        "There are many things that we would throw away if we were not afraid that others might pick them up. — Oscar Wilde",
        "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. — Oscar Wilde",
        "One should always play fairly when one has the winning cards. — Oscar Wilde",
        "Arguments are extremely vulgar, for everyone in good society holds exactly the same opinion. — Oscar Wilde",
        "Success is a science; if you have the conditions, you get the result. — Oscar Wilde",
        "There are only two kinds of people who are really fascinating - people who know absolutely everything, and people who know absolutely nothing. — Oscar Wilde",
        "Ambition is the germ from which all growth of nobleness proceeds. — Oscar Wilde",
        "Most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one's mistakes. — Oscar Wilde",
        "There is no sin except stupidity. — Oscar Wilde",
        "Ordinary riches can be stolen; real riches cannot. In your soul are infinitely precious things that cannot be taken from you. — Oscar Wilde",
        "He has no enemies, but is intensely disliked by his friends. — Oscar Wilde",
        "I can stand brute force, but brute reason is quite unbearable. There is something unfair about its use. It is hitting below the intellect. — Oscar Wilde",
        "Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. — Oscar Wilde",
        "There is only one thing in life worse than being talked about, and that is not being talked about. — Oscar Wilde",
        "Consistency is the last refuge of the unimaginative. — Oscar Wilde",
        "If a thing is worth doing, it is worth doing well. If it is worth having, it is worth waiting for. If it is worth attaining, it is worth fighting for. If it is worth experiencing, it is worth putting aside time for. — Oscar Wilde",
        "Art is the most intense mode of individualism that the world has known. — Oscar Wilde",
        "With age comes wisdom, but sometimes age comes alone. — Oscar Wilde",
        "A dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world. — Oscar Wilde",
        "An optimist will tell you the glass is half-full; the pessimist, half-empty; and the engineer will tell you the glass is twice the size it needs to be. — Oscar Wilde",
        "We are all in the gutter, but some of us are looking at the stars. — Oscar Wilde",
        "Selfishness is not living your life as you wish to live it. Selfishness is wanting others to live their lives as you wish them to. — Oscar Wilde",
        "Women are made to be loved, not understood. — Oscar Wilde",
        "It's hard to win an argument with a smart person. It's damn near impossible to win an argument with a stupid person. — Bill Murray",
    ];
    function message(msg, severity) {
        if (severity === void 0) { severity = Severities.debug; }
        var debug = true;
        switch (severity) {
            case Severities.debug:
                if (debug) {
                    console.log(scriptName + ": " + msg);
                }
                break;
            case Severities.log:
                console.log(scriptName + ": " + msg);
                break;
            case Severities.warn:
                console.warn(scriptName + ": " + msg);
                break;
            case Severities.error:
                console.error(scriptName + ": " + msg);
                break;
            default:
                console.error(scriptName + ": No such logging level (" + severity + ")");
        }
    }
    function findDiv(ariaLabel) {
        // Return the first <div>.
        // If ariaLabel is provided, qualify the search with that value.
        var div = null;
        if (ariaLabel) {
            div = document.querySelector('div[aria-label="' + ariaLabel + '"]');
        }
        else {
            div = document.querySelector('div');
        }
        if (div) {
            return (div);
        }
        else {
            return null;
        }
    }
    function getComposeArea() {
        return (findDiv("Message Body"));
    }
    function getAddSignatureElement() {
        // let ase: HTMLElement | null = null;
        // addSignatureIds.forEach( ( id: string ) => {
        //     if( !ase ) {
        // 	let s = document.getElementById( id );
        // 	if( s ) {
        // 	    message( "found addSignatureId at " + id );
        // 	    ase = s;
        // 	}
        //     }
        // });
        // return( ase );
        return (findDiv("Insert signature"));
    }
    // Function to check if the Gmail compose page has fully loaded and populated
    function isComposePageLoaded() {
        message("isComposePageLoaded: checking...");
        var composeArea = getComposeArea();
        //        let messageArea = document.getElementById( messageAreaId );
        message("composeArea = " + composeArea);
        if (composeArea)
            message("composeArea.innerText = " + composeArea.innerText);
        return ((composeArea && composeArea.innerText) ? true : false);
    }
    var boxStartCSS = "<div style='padding: 20px; margin-left: 40px; width: 80%; background-color: lightyellow; border: 2px solid lightblue; box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2); transform-origin: top left;'>";
    var boxEndCSS = "</div>";
    var randomIndex = Math.floor(Math.random() * aphorisms.length);
    var jcSignature = "<font face=\"georgia, serif\" size=\"4\" color=\"#0000ff\">— jc</font>" +
        "<p><i>" +
        aphorisms[randomIndex] +
        "</i></p>";
    // Function to format the email's embedded article link.
    // It depends on the format being:
    //     From The New York Times:<br>
    //     Headline<br>
    //     Summary<br>
    //     Link
    function formatURLEmail() {
        var subjectContainers = document.getElementsByClassName(subjectContainerClassName);
        message("subjectContainers = " + subjectContainers);
        if (subjectContainers) {
            var subject = subjectContainers[0].value;
            if (/^\s*$/.test(subject)) {
                message("subject is empty! = ");
            }
            else {
                // message( "subject = " + subject );
                var cleanSubject = subject.replace(/ \|[^-]*$/, "").
                    replace(" - The Atlantic", "").
                    replace(" - The New York Times", "").
                    replace(" - Wikiwand", "").
                    replace(" - YouTube", "").
                    replace(" - Google Photos", "");
                // message( "cleanSubject = " + cleanSubject );
                subjectContainers[0].value = cleanSubject;
                var composeArea = getComposeArea();
                if (composeArea) {
                    message("composeArea = " + composeArea);
                    var content = composeArea.innerHTML;
                    message("content = " + content);
                    var newContent = "<span></span>" +
                        content.
                            replace(/(https?:\/\/[^<]+)/, "&nbsp;" + boxStartCSS + "<a style='font-size: 24px; font-weight: bold;' href='$1'>" + cleanSubject + "</a><br>" + boxEndCSS + "-jc").
                            replace(/((<br>)*-jc)+/, "<br>" + jcSignature).
                            replace(/<div class="gmail_default" style="font-size:large"><br><[/]div><br>/, "");
                    message("newContent = " + newContent);
                    safelyAssignInnerHTML(composeArea, newContent);
                    composeArea.focus();
                }
            }
        }
    }
    function formatNYTEmail() {
        var composeArea = getComposeArea();
        if (composeArea) {
            var content = composeArea.innerHTML;
            var contentLines = content.split("<br>");
            var newContent = "<br>" +
                boxStartCSS +
                "<a style='font-size: 24px; font-weight: bold;' href='" +
                contentLines[6] +
                "'>" +
                contentLines[2] +
                "</a><br>" +
                contentLines[4] +
                "<br>" +
                boxEndCSS +
                "<p>" + jcSignature;
            safelyAssignInnerHTML(composeArea, newContent);
            composeArea.focus();
        }
    }
    function safelyAssignTextContent(element, content) {
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            var policyFactory = window.trustedTypes.createPolicy('myPolicy', {
                createHTML: function (input) { return input; }, // You can customize this sanitizer function
            });
            // TODO: implement some kind of sanitizer like this:
            // const policyFactory = trustedTypes.createPolicy("myPolicy", {
            //     createHTML: (input :string) => DOMPurify.sanitize( input ),
            // });
            var safeContent = policyFactory.createHTML(content);
            element.textContent = safeContent;
        }
    }
    function safelyAssignInnerHTML(element, content) {
        var policyFactory = null;
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            policyFactory = window.trustedTypes.createPolicy('myPolicy', {
                createHTML: function (input) { return input; }, // You can customize this sanitizer function
            });
            // TODO: implement some kind of sanitizer
            // const policyFactory = trustedTypes.createPolicy("myPolicy", {
            //     createHTML: (input :string) => DOMPurify.sanitize( input ),
            // });
            var safeContent = policyFactory.createHTML(content);
            element.innerHTML = safeContent;
        }
    }
    // Add a format button after ELEMENT with label TEXT and a callback of FUNCT.
    function addFormatButton(element, text, funct) {
        var buttonElement = document.createElement("button");
        safelyAssignTextContent(buttonElement, text);
        buttonElement.addEventListener('click', funct);
        if (element.parentNode) {
            element.parentNode.insertBefore(buttonElement, element);
        }
    }
    // Conditionally add a format button,
    // iff the first line of content is "From The New York Times:".
    function conditionallyAddFormatButton() {
        message("in conditionallyAddFormatButton()...");
        var composeArea = getComposeArea();
        message("conditionallyAddFormatButton: composeArea=" + composeArea);
        message("conditionallyAddFormatButton: composeArea=" + composeArea);
        if (composeArea) {
            if (composeArea.innerHTML) {
                var content = composeArea.innerHTML.split("<br>");
                if (content.length > 0) {
                    var addSignatureElement = getAddSignatureElement();
                    if (addSignatureElement) {
                        var nytRegex = /from the new york times/i;
                        if (nytRegex.test(content[0])) {
                            message("calling addFormatButton()...");
                            addFormatButton(addSignatureElement, "Format NYT", formatNYTEmail);
                            message("calling formatNYTEmail()...");
                            formatNYTEmail();
                        }
                        else {
                            var filteredContent = composeArea.innerHTML.split("<br>").filter(function (line) { return !/^<[/]?div/.test(line); });
                            var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                            if (filteredContent.length > 0 && (urlRegex.test(filteredContent[0]) || urlRegex.test(filteredContent[filteredContent.length - 1]))) {
                                addFormatButton(addSignatureElement, "Format URL", formatURLEmail);
                                formatURLEmail();
                            }
                        }
                    }
                }
            }
        }
    }
    // Check if the compose page is loaded, and if not, periodically recheck
    function checkAndRun() {
        if (isComposePageLoaded()) {
            conditionallyAddFormatButton();
        }
        else {
            if (location.href.includes("source=mailto")) {
                setTimeout(checkAndRun, 1000); // Recheck every 1 second
            }
        }
    }
    checkAndRun();
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// jinx-local-words: "https lightblue lightyellow nh oq rgba"
// End:
