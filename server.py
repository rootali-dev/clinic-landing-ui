from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# سرو مستقیم index.html در روت اصلی
@app.get("/")
async def read_index():
    return FileResponse("index.html")

# سرو تمامی فایل‌های استاتیک پروژه
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
