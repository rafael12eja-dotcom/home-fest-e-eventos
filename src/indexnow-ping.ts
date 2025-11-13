export async function sendIndexNowPing(urls: string[]) {
  const key = "homefesteeventos-4154d9a1b7e944f8b224d327";

  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "homefesteeventos.com.br",
        key: key,
        keyLocation: "https://homefesteeventos.com.br/indexnow-key.txt",
        urlList: urls,
      }),
    });
    console.log("[IndexNow] Ping enviado com sucesso");
  } catch (error) {
    console.error("[IndexNow] Erro ao enviar ping:", error);
  }
}
