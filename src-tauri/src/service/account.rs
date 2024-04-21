use tauri::Error;
use anyhow::{anyhow, Result};

async fn login_function() -> Result<(),Error>{
    let matcher= true;
    if matcher{
        //TODO
    }else{
        return Err(anyhow!("wrong").into());
    }
    Ok(())
}

//tauri::command definition
#[tauri::command]
pub async fn login() -> Result<(),Error>{
    login_function().await?;
    Ok(())
}