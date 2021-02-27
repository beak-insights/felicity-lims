import uvicorn
from felicity.main import flims


if __name__ == "__main__":
    uvicorn.run(flims, host="0.0.0.0", port=8000, debug=True, workers=4)