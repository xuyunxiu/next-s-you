// ============================================
// 📁 用戶資料庫 (User Database)
// 在這裡新增、修改、刪除帳號
// ============================================

const USER_DB = {
    // 🔴 1. 妳 (超級管理員+藝人)
    "admin@smtown.com": { 
        pwd: "123", 
        role: "admin", 
        name: "Karina (Admin)", 
        avatar: "https://ui-avatars.com/api/?name=Karina&background=random&color=fff" 
    },
    
    // 🔴 2. 妳的搭檔 (超級管理員+藝人)
    "partner@smtown.com": { 
        pwd: "123", 
        role: "admin", 
        name: "Winter (Admin)", 
        avatar: "https://ui-avatars.com/api/?name=Winter&background=random&color=fff" 
    },
    
    // 🟣 3. 普通藝人 (無管理權限)
    "ningning@smtown.com": { 
        pwd: "123", 
        role: "artist", 
        name: "NingNing", 
        avatar: "https://ui-avatars.com/api/?name=NingNing&background=random&color=fff" 
    },
    
    // ⚪ 4. 粉絲帳號
    "fan@my.com": { 
        pwd: "123", 
        role: "fan", 
        name: "My Fan", 
        avatar: null 
    }
};