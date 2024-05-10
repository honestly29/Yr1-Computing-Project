function inCanvasChecker() {
    
    if (mouseX >= width || mouseX <= 0  || mouseY >= height || mouseY <= 0){
        return false
    }
    else {
        return true
    }

}