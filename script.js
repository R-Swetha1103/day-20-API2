document.getElementById('fetch-data').addEventListener('click', function() {
  fetch('https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com')
      .then(response => response.json())
      .then(data => {
          const domainInfo = document.getElementById('domain-info');
          domainInfo.innerHTML = ''; 

          if (data && data.domains && data.domains.length > 0) {
              const domain = data.domains[0];
              domainInfo.innerHTML = `
                  <p><strong>Domain:</strong> ${domain.domain}</p>
                  <p><strong>Country:</strong> ${domain.country}</p>
                  <p><strong>Creation Date:</strong> ${domain.create_date}</p>
                  <p><strong>Update Date:</strong> ${domain.update_date}</p>
                  <p><strong>Expires Date:</strong> ${domain.expires_date}</p>
              `;
          } else {
              domainInfo.innerHTML = '<p>No data found.</p>';
          }
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          document.getElementById('domain-info').innerHTML = '<p>Failed to fetch data.</p>';
      });
});
