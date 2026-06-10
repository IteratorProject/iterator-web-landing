import type { Translations } from './types';

const th: Translations = {
    nav: {
        home: 'หน้าแรก',
        story: 'เรื่องราว',
        loop: 'วงจร',
        inspiration: 'แรงบันดาลใจ',
        journey: 'การเดินทาง',
        connect: 'เชื่อมต่อ',
        close: 'ปิด',
        menu: 'เมนู',
        space: 'สเปซ',
        vimMode: 'Vim Mode',
        press: 'กด',
        toClose: 'เพื่อปิด',
        pressAnyKey: 'กดปุ่มใดก็ได้เพื่อไปยังส่วนต่างๆ',
    },
    hero: {
        title1: 'THE ITERATOR',
        title2: 'PROJECT',
        iterating: 'กำลังทำซ้ำ',
        iAm: 'ฉันคือ',
        subtitle: 'ลอง \u2192 ล้ม \u2192 เรียนรู้ \u2192 ทำซ้ำ',
    },
    story: {
        heading: 'ทำไมต้อง ITERATE?',
        quote: '"ความก้าวหน้าคือวงวน ไม่ใช่เส้นตรง"',
        p1a: 'The Iterator Project คือ',
        p1b: 'ที่นี่ไม่ใช่แค่ที่โชว์ผลงานที่เสร็จแล้ว แต่เป็นแพลตฟอร์มที่ผมบันทึกความจริงแบบไม่ปรุงแต่ง ของเส้นทางการเป็นนักพัฒนาตัวจริง',
        p2: 'ผมแชร์กระบวนการเบื้องหลังโค้ดทุกบรรทัด \u2014 อัลกอริทึมที่พัง คณิตศาสตร์ที่เข้าใจในที่สุด และความรู้ที่สะสมมาตลอดทาง เป้าหมายคือเปลี่ยนทุก iteration ของผมให้เป็นบทเรียนสำหรับทุกคน',
        sticky: 'สร้าง.\nทำลาย.\nแบ่งปัน.',
    },
    loop: {
        heading: 'THE LOOP',
        subtitle: 'เสพ สร้าง ทำซ้ำ',
        article: 'บทความ',
        readFull: 'อ่านบทความเต็ม \u2192',
    },
    journey: {
        heading: 'THE JOURNEY',
        milestones: [
            {
                year: 'ปลายปี 2568',
                title: 'ประกายแรก',
                description: 'ไอเดียของ The Iterator Project เริ่มเป็นรูปเป็นร่าง จุดเริ่มต้นของวิสัยทัศน์ที่จะสร้างบางอย่างที่มีความหมาย',
                tags: ['วางแผน', 'ไอเดีย'],
            },
            {
                year: '2569',
                title: 'เปิดตัวเต็มรูปแบบ',
                description: 'ผลิตภัณฑ์แรกพร้อมแล้ว The Iterator Project เปิดตัวอย่างเป็นทางการ นี่เป็นเพียงจุดเริ่มต้น',
                tags: ['เปิดตัว', 'ผลิตภัณฑ์'],
            },
            {
                year: '...',
                title: 'เร็วๆ นี้',
                description: 'การเดินทางยังอีกไกล ทำซ้ำมากขึ้น เรียนรู้มากขึ้น สร้างมากขึ้น',
                tags: ['อนาคต', 'รอติดตาม'],
            },
        ],
    },
    inspiration: {
        heading: 'แรงบันดาลใจ',
        subtitle: 'วิดีโอและคำพูดที่เติมพลังให้การเดินทางของผม',
        items: [
            {
                quote: 'ผมหวังว่าคุณจะมองอุปสรรคเป็นโอกาสใหม่ ความเจ็บปวดและความทุกข์จะหล่อหลอมตัวตนคุณ สร้างความยืดหยุ่นและความคล่องตัว และนั่นคือพลังพิเศษที่แท้จริง',
                author: 'Jensen Huang (Caltech 2024)',
            },
            {
                quote: 'คุณควรเชื่อว่าตัวเองมีอำนาจกำหนดอนาคตได้ เพราะคุณคือคนที่จะสร้างมันขึ้นมา',
                author: 'Andrej Karpathy (UC Berkeley 2024)',
            },
            {
                quote: 'สิ่งที่สำคัญที่สุดคือการเริ่มต้น อัตราการทำซ้ำคือสิ่งที่สำคัญที่สุด',
                author: 'Sam Altman (Lex Fridman 2024)',
            },
            {
                quote: 'ถ้าผ่านไป 3 เดือนแล้วผมก้าวไปข้างหน้าได้แม้แค่ก้าวเดียว ก็หมายความว่าผมทำได้ และจะทำต่อไปเรื่อยๆ',
                author: 'Thor (PirateSoftware)',
            },
        ],
    },
    contact: {
        heading: 'เชื่อมต่อ',
        subtitle: 'เริ่ม Handshake เลือกช่องทางของคุณ',
        preferEmail: 'สะดวกใช้อีเมลมากกว่าไหม?',
        links: [
            { name: 'LinkedIn', handle: 'โปรไฟล์ LinkedIn' },
            { name: 'GitHub', handle: '@Tan1pawat' },
            { name: 'YouTube', handle: 'ช่อง YouTube' },
            { name: 'X / Twitter', handle: '@IteratorProject' },
            { name: 'Facebook', handle: 'เพจ Facebook' },
            { name: 'Medium', handle: 'บล็อกเทค' },
        ],
    },
    intro: {
        words: ['ลอง', 'ล้ม', 'เรียนรู้', 'ทำซ้ำ'],
        final: 'THE ITERATOR PROJECT',
        initial: 'ลอง',
    },
    footer: '\u00A9 {year} The Iterator Project. สร้างจากความล้มเหลว',
    toggle: 'EN',
};

export default th;
