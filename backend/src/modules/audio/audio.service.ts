// function ดึงเพลงจาก GoogleDrive
export const fetchAudioFromDrive = async (fileId: string) => {
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${Bun.env.GOOGLE_DRIVE_KEY}`;
  
  try {
    const response = await fetch(driveUrl);
    
    if (!response.ok) {
      return new Response(`ไม่สามารถดึงข้อมูลได้ Status: ${response.status}`, { status: response.status });
    }
    
    return response; 
  } catch (error) {
    console.error("เกิดข้อผิดพลาดใน Audio Service:", error);
    throw error; 
  }
};
