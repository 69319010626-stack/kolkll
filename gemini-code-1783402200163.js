// 1. เรียกใช้งาน Express ซึ่งเป็นเครื่องมือสร้าง Web Server
const express = require("express");
const app = express();

// 2. สร้าง Route หรือเส้นทาง เมื่อมีคนพิมพ์ URL เข้ามาที่หน้าแรก (/)
app.get("/", (request, response) => {
  // สิ่งที่ Server จะตอบกลับไป (Response) พร้อมข้อมูลของ นายธาดา โพธิ์ชัย
  response.send(`
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>ยินดีต้อนรับสู่ Server ของผม</h1>
      <p>นี่คือ Web Server เครื่องแรกที่สร้างขึ้นเองครับ</p>
      <hr style="width: 50%; margin: 20px auto;">
      <h2>ข้อมูลนักศึกษา</h2>
      <p style="font-size: 1.2em;"><strong>รหัสนักศึกษา:</strong> 69319010626</p>
      <p style="font-size: 1.2em;"><strong>ชื่อ-นามสกุล:</strong> นายธาดา โพธิ์ชัย</p>
    </div>
  `);
});

// 3. สั่งให้ Server เริ่มทำงานและรอรับข้อมูลที่ Port (Render จะกำหนด Port ให้เองอัตโนมัติ)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Server กำลังทำงานที่ Port " + listener.address().port);
});