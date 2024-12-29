import os
import sys
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


print(sys.path)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
async def hello():
    return{"messagpye": "Welcome to SlothAudio"}


@app.get("/")
async def title():
    return{"message": "Title is SlothAudio"}



if __name__ == "__main__":
    import uvicorn
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("app:app", host=host, port=port, reload=True)
