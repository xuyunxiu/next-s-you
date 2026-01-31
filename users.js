// ============================================
// 📁 用戶資料庫 (User Database)
// 在這裡新增、修改、刪除帳號
// ============================================

const USER_DB = {
    // 🔴 1. 妳 (超級管理員+藝人)
    "woojae0733": { 
        pwd: "jelly33", 
        role: "admin", 
        name: "Karina (Admin)", 
        avatar: "https://ui-avatars.com/api/?name=Karina&background=random&color=fff" 
    },
    
    // 🔴 2. 妳的搭檔
    "winter": { 
        pwd: "123", 
        role: "admin", 
        name: "Winter (Admin)", 
        avatar: "https://ui-avatars.com/api/?name=Winter&background=random&color=fff" 
    },
    
    // 🟣 3. 普通藝人
    "ning": { 
        pwd: "123", 
        role: "artist", 
        name: "NingNing", 
        avatar: "https://ui-avatars.com/api/?name=NingNing&background=random&color=fff" 
    },
    
    // ⚪ 4. 粉絲
    "my": { 
        pwd: "123", 
        role: "fan", 
        name: "My Fan", 
        avatar: null 
    }
};