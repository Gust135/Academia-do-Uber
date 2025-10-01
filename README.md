# Academia do Uber - Site de Vendas

Site estático profissional para divulgação do curso e ebook sobre estratégias para motoristas de aplicativo.

## 🚀 Deploy no GitHub Pages

### 1. Preparar Repositório
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos para o repositório
3. Vá em **Settings > Pages**
4. Selecione **Deploy from a branch**
5. Escolha **main** (ou master) e **/ (root)**
6. Clique em **Save**

Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repositorio`

## ⚙️ Configuração dos Links

**IMPORTANTE**: Antes de usar o site, você DEVE substituir os links placeholder pelos seus links reais de venda.

### Onde substituir:

No arquivo `index.html`, procure por estes comentários:

```html
<!-- PLACEHOLDER: Substitua "Link do criador aqui" pelos seus links reais -->
<a href="#" class="btn btn-primary" data-creator-link="Link do criador aqui">
```

### Substitua:
- `data-creator-link="Link do criador aqui"` → `data-creator-link="SEU_LINK_DE_VENDA_DO_CURSO"`
- `href="#"` → `href="SEU_LINK_DE_VENDA_DO_CURSO"`

**Exemplo:**
```html
<a href="https://hotmart.com/pt-br/marketplace/produtos/seu-curso" class="btn btn-primary" data-creator-link="https://hotmart.com/pt-br/marketplace/produtos/seu-curso">
```

### Links que precisam ser alterados:
1. **Botão "Comprar Curso"** (aparece 2 vezes na página - hero e final CTA)
2. **Botão "Comprar Ebook Avulso"** (aparece 2 vezes na página - hero e final CTA)  
3. **Botão "Comprar Curso Completo"** (card do curso na seção produtos)
4. **Botão "Comprar Ebook"** (card do ebook na seção produtos)

**Total: 6 links para substituir**

## 📁 Estrutura dos Arquivos

```
/
├── index.html          # Página principal
├── src/
│   ├── style.css       # Estilos CSS
│   ├── script.js       # JavaScript
│   └── img/           # Pasta para imagens (placeholder)
└── README.md          # Este arquivo
```

## 🎨 Personalização

### Cores Principais:
- **Preto**: `#000000` (fundo principal)
- **Verde Uber**: `#00ff7f` (destaques)
- **Amarelo**: `#ffd700` (ofertas especiais)
- **Azul**: `#1e90ff` (botões de contato)

### Modificar Conteúdo:
1. **Textos**: Edite diretamente no `index.html`
2. **Cores**: Modifique no `src/style.css`
3. **Interações**: Ajuste no `src/script.js`

## 📧 Configuração do Email

O botão de contato já está configurado para:
- **Email**: melogxsm@gmail.com
- **Assunto**: "DÚVIDA SOBRE O CURSO"

Para alterar, modifique esta linha no `index.html`:
```html
<a href="mailto:SEU_EMAIL@gmail.com?subject=ASSUNTO_DESEJADO">
```

## 🔧 Funcionalidades

### Recursos Implementados:
- ✅ Design responsivo (mobile/desktop)
- ✅ Hover effects nos cards
- ✅ Animações de scroll
- ✅ Badge piscante "Oferta por tempo limitado"
- ✅ Verificação automática de links placeholder
- ✅ Mailto com assunto pré-preenchido

### Interatividade:
- **Cards**: Elevam ao passar o mouse
- **Botões**: Efeito ripple ao clicar
- **Badges**: Animação pulsante
- **Links placeholder**: Alerta automático se não forem substituídos

## 🛠️ Manutenção

### Para atualizar o site:
1. Edite os arquivos localmente
2. Faça commit das mudanças
3. Push para o repositório GitHub
4. O site será atualizado automaticamente

### Teste local:
Abra o `index.html` no navegador ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver o http-server instalado)
npx http-server
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📟 Tablets (768px+) 
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎯 Conversão

### Elementos de conversão implementados:
- Call-to-action destacado no topo e final
- Badge "Melhor Oferta" com animação
- Urgência com "Oferta por tempo limitado"
- Destaques visuais nas videoaulas
- Seção "Por que comprar" com benefícios claros
- Design profissional inspirado no Uber

## 📞 Suporte

Para dúvidas sobre o curso ou ebook, entre em contato através do botão "Entre em Contato" no site, que abrirá seu cliente de email automaticamente.

---

**Desenvolvido para Academia do Uber** 🚗
Site estático otimizado para GitHub Pages